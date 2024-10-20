import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const fonts = localFont({
  src: [
    {
      path: "./fonts/Gilroy-Light.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Gilroy-ExtraBold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Частный мебельер",
  description: "Салон мебели премиум класса",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${fonts.className}`}>{children}</body>
    </html>
  );
}
