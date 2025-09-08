import localFont from "next/font/local";

export const rakiby = localFont({
    src: [
        {
            path: "../public/fonts/rakiby.woff2",
            weight: "400",
            style: "normal",
        },
    ],
    variable: "--font-rakiby",
    display: "swap",
});

export const poppins = localFont({
    src: [
        {
            path: "../public/fonts/poppins.woff2",
            weight: "400",
            style: "normal",
        },
    ],
    variable: "--font-poppins",
    display: "swap",
});
