import { Badge } from "@/src/components/ui/badge";

interface BadgeListProps {
    items?: string[];
    variant?: "default" | "secondary" | "destructive" | "outline";
    emptyMessage?: string;
}

export default function BadgeList({
    items,
    variant = "outline",
    emptyMessage = "Aucun élément",
}: BadgeListProps) {
    if (!items || items.length === 0) {
        return (
            <span className="text-muted-foreground text-sm">
                {emptyMessage}
            </span>
        );
    }

    return (
        <div className="flex gap-2 flex-wrap">
            {items.map((item, index) => (
                <Badge key={index} variant={variant}>
                    {item}
                </Badge>
            ))}
        </div>
    );
}
