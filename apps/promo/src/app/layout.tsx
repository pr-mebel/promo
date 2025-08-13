import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";
import { YandexMetrika } from "@/scripts";

const fonts = localFont({
  src: [
    {
      path: "./fonts/Gilroy-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Gilroy-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Gilroy-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Gilroy-SemiBold.woff",
      weight: "600",
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
      <body className={`${fonts.className} text-dark-900`}>{children}</body>
      <Script
        id="yandex-metrika"
        dangerouslySetInnerHTML={{
          __html: YandexMetrika,
        }}
      />
    </html>
  );
}
