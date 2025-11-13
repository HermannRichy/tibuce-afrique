import { InscriptionSummary } from "@/src/types/inscription";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import {
    Document,
    Packer,
    Paragraph,
    Table,
    TableCell,
    TableRow,
    WidthType,
    TextRun,
} from "docx";
import { saveAs } from "file-saver";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

/**
 * Interface étendue pour jsPDF avec la propriété lastAutoTable ajoutée par jspdf-autotable
 */
interface jsPDFWithAutoTable extends jsPDF {
    lastAutoTable?: {
        finalY: number;
    };
}

/**
 * Format une date pour l'affichage
 */
const formatDate = (dateString: string): string => {
    try {
        return format(new Date(dateString), "dd/MM/yyyy HH:mm", { locale: fr });
    } catch (error) {
        return dateString;
        console.log(error);
    }
};

/**
 * Prépare les données pour l'export
 */
const prepareDataForExport = (inscriptions: InscriptionSummary[]) => {
    return inscriptions.map((ins) => ({
        ID: ins.id,
        "Nom de l'équipe": ins.teamName,
        Pays: ins.country,
        Édition: ins.edition,
        Organisation: ins.organization,
        "Nombre de membres": ins.numberOfMembers,
        "Participant 1": ins.participant1Name,
        "Email 1": ins.participant1Email,
        "Téléphone 1": ins.participant1Phone,
        "Participant 2": ins.participant2Name,
        "Email 2": ins.participant2Email,
        "Téléphone 2": ins.participant2Phone,
        "Participant 3": ins.participant3Name || "",
        "Email 3": ins.participant3Email || "",
        "Téléphone 3": ins.participant3Phone || "",
        "Tracks sélectionnés": ins.selectedTrack?.join(", ") || "",
        "Date de création": formatDate(ins.createdAt),
        "Date de mise à jour": formatDate(ins.updatedAt),
    }));
};

/**
 * Exporte les inscriptions au format CSV
 */
export const exportToCSV = (inscriptions: InscriptionSummary[]) => {
    if (inscriptions.length === 0) {
        alert("Aucune inscription à exporter");
        return;
    }

    const data = prepareDataForExport(inscriptions);
    const headers = Object.keys(data[0]);
    const csvContent = [
        headers.join(","),
        ...data.map((row) =>
            headers
                .map((header) => {
                    const value = row[header as keyof typeof row];
                    // Échapper les virgules et guillemets
                    if (
                        typeof value === "string" &&
                        (value.includes(",") ||
                            value.includes('"') ||
                            value.includes("\n"))
                    ) {
                        return `"${value.replace(/"/g, '""')}"`;
                    }
                    return value;
                })
                .join(",")
        ),
    ].join("\n");

    const blob = new Blob(["\uFEFF" + csvContent], {
        type: "text/csv;charset=utf-8;",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `inscriptions_${format(new Date(), "yyyy-MM-dd")}.csv`;
    link.click();
    URL.revokeObjectURL(url);
};

/**
 * Exporte les inscriptions au format XLSX (Excel)
 */
export const exportToXLSX = (inscriptions: InscriptionSummary[]) => {
    if (inscriptions.length === 0) {
        alert("Aucune inscription à exporter");
        return;
    }

    const data = prepareDataForExport(inscriptions);
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Inscriptions");

    // Ajuster la largeur des colonnes
    const columnWidths = Object.keys(data[0]).map((key) => ({
        wch: Math.max(key.length, 15),
    }));
    worksheet["!cols"] = columnWidths;

    XLSX.writeFile(
        workbook,
        `inscriptions_${format(new Date(), "yyyy-MM-dd")}.xlsx`
    );
};

/**
 * Exporte les inscriptions au format PDF
 */
export const exportToPDF = (inscriptions: InscriptionSummary[]) => {
    if (inscriptions.length === 0) {
        alert("Aucune inscription à exporter");
        return;
    }

    const doc = new jsPDF("l", "mm", "a4"); // Orientation landscape pour plus d'espace

    // Titre
    doc.setFontSize(16);
    doc.text("Liste des Inscriptions TIBUCE Africa", 14, 15);

    // Date d'export
    doc.setFontSize(10);
    doc.text(
        `Exporté le: ${format(new Date(), "dd/MM/yyyy à HH:mm", {
            locale: fr,
        })}`,
        14,
        22
    );

    // Préparer les données pour le tableau
    const tableData = inscriptions.map((ins) => [
        ins.id.toString(),
        ins.teamName,
        ins.country,
        ins.edition,
        ins.numberOfMembers.toString(),
        ins.participant1Name,
        ins.participant1Email,
        formatDate(ins.createdAt),
    ]);

    autoTable(doc, {
        head: [
            [
                "ID",
                "Équipe",
                "Pays",
                "Édition",
                "Membres",
                "Contact Principal",
                "Email",
                "Date",
            ],
        ],
        body: tableData,
        startY: 28,
        styles: { fontSize: 8, cellPadding: 2 },
        headStyles: {
            fillColor: [59, 130, 246],
            textColor: 255,
            fontStyle: "bold",
        },
        alternateRowStyles: { fillColor: [245, 247, 250] },
        margin: { top: 28 },
    });

    // Ajouter les détails complets pour chaque inscription sur des pages supplémentaires si nécessaire
    const docWithAutoTable = doc as jsPDFWithAutoTable;
    let yPos = docWithAutoTable.lastAutoTable?.finalY
        ? docWithAutoTable.lastAutoTable.finalY + 10
        : 28 + tableData.length * 8 + 20; // Estimation si lastAutoTable n'est pas disponible
    if (yPos > 180) {
        doc.addPage();
        yPos = 20;
    }

    inscriptions.forEach((ins, index) => {
        if (yPos > 180 && index > 0) {
            doc.addPage();
            yPos = 20;
        }

        doc.setFontSize(12);
        doc.setFont("helvetica", "bold");
        doc.text(`Inscription #${ins.id} - ${ins.teamName}`, 14, yPos);
        yPos += 8;

        doc.setFontSize(10);
        doc.setFont("helvetica", "normal");
        const details = [
            `Pays: ${ins.country}`,
            `Édition: ${ins.edition}`,
            `Organisation: ${ins.organization}`,
            `Nombre de membres: ${ins.numberOfMembers}`,
            `Participant 1: ${ins.participant1Name} (${ins.participant1Email}, ${ins.participant1Phone})`,
            `Participant 2: ${ins.participant2Name} (${ins.participant2Email}, ${ins.participant2Phone})`,
            ins.participant3Name
                ? `Participant 3: ${ins.participant3Name} (${
                      ins.participant3Email || ""
                  }, ${ins.participant3Phone || ""})`
                : "",
            ins.selectedTrack ? `Tracks: ${ins.selectedTrack.join(", ")}` : "",
            `Date de création: ${formatDate(ins.createdAt)}`,
        ].filter(Boolean);

        details.forEach((detail) => {
            doc.text(detail, 14, yPos);
            yPos += 6;
        });

        yPos += 5;
    });

    doc.save(`inscriptions_${format(new Date(), "yyyy-MM-dd")}.pdf`);
};

/**
 * Exporte les inscriptions au format DOCX (Word)
 */
export const exportToDOCX = async (inscriptions: InscriptionSummary[]) => {
    if (inscriptions.length === 0) {
        alert("Aucune inscription à exporter");
        return;
    }

    const tableRows: TableRow[] = [
        new TableRow({
            children: [
                new TableCell({ children: [new Paragraph("ID")] }),
                new TableCell({ children: [new Paragraph("Équipe")] }),
                new TableCell({ children: [new Paragraph("Pays")] }),
                new TableCell({ children: [new Paragraph("Édition")] }),
                new TableCell({ children: [new Paragraph("Membres")] }),
                new TableCell({ children: [new Paragraph("Contact")] }),
                new TableCell({ children: [new Paragraph("Email")] }),
                new TableCell({ children: [new Paragraph("Date")] }),
            ],
        }),
    ];

    inscriptions.forEach((ins) => {
        tableRows.push(
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph(ins.id.toString())],
                    }),
                    new TableCell({ children: [new Paragraph(ins.teamName)] }),
                    new TableCell({ children: [new Paragraph(ins.country)] }),
                    new TableCell({ children: [new Paragraph(ins.edition)] }),
                    new TableCell({
                        children: [
                            new Paragraph(ins.numberOfMembers.toString()),
                        ],
                    }),
                    new TableCell({
                        children: [new Paragraph(ins.participant1Name)],
                    }),
                    new TableCell({
                        children: [new Paragraph(ins.participant1Email)],
                    }),
                    new TableCell({
                        children: [new Paragraph(formatDate(ins.createdAt))],
                    }),
                ],
            })
        );
    });

    const table = new Table({
        rows: tableRows,
        width: {
            size: 100,
            type: WidthType.PERCENTAGE,
        },
    });

    // Sections de détails pour chaque inscription
    const detailParagraphs: (Paragraph | Table)[] = [
        new Paragraph({
            children: [
                new TextRun({
                    text: "Liste des Inscriptions TIBUCE Africa",
                    bold: true,
                    size: 28,
                }),
            ],
        }),
        new Paragraph({
            text: `Exporté le: ${format(new Date(), "dd/MM/yyyy à HH:mm", {
                locale: fr,
            })}`,
        }),
        new Paragraph({ text: "" }),
        table,
        new Paragraph({ text: "" }),
        new Paragraph({
            children: [
                new TextRun({
                    text: "Détails des Inscriptions",
                    bold: true,
                    size: 24,
                }),
            ],
        }),
    ];

    inscriptions.forEach((ins) => {
        detailParagraphs.push(
            new Paragraph({ text: "" }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: `Inscription #${ins.id} - ${ins.teamName}`,
                        bold: true,
                        size: 22,
                    }),
                ],
            }),
            new Paragraph({ text: `Pays: ${ins.country}` }),
            new Paragraph({ text: `Édition: ${ins.edition}` }),
            new Paragraph({ text: `Organisation: ${ins.organization}` }),
            new Paragraph({
                text: `Nombre de membres: ${ins.numberOfMembers}`,
            }),
            new Paragraph({
                text: `Participant 1: ${ins.participant1Name} (${ins.participant1Email}, ${ins.participant1Phone})`,
            }),
            new Paragraph({
                text: `Participant 2: ${ins.participant2Name} (${ins.participant2Email}, ${ins.participant2Phone})`,
            }),
            ...(ins.participant3Name
                ? [
                      new Paragraph({
                          text: `Participant 3: ${ins.participant3Name} (${
                              ins.participant3Email || ""
                          }, ${ins.participant3Phone || ""})`,
                      }),
                  ]
                : []),
            ...(ins.selectedTrack && ins.selectedTrack.length > 0
                ? [
                      new Paragraph({
                          text: `Tracks: ${ins.selectedTrack.join(", ")}`,
                      }),
                  ]
                : []),
            new Paragraph({
                text: `Date de création: ${formatDate(ins.createdAt)}`,
            })
        );
    });

    const doc = new Document({
        sections: [
            {
                properties: {},
                children: detailParagraphs,
            },
        ],
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, `inscriptions_${format(new Date(), "yyyy-MM-dd")}.docx`);
};
