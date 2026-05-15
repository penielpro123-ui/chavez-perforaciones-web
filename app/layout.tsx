import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CHAVEZ'PERFORACIONES HN | Perforación de pozos en Honduras",
  description:
    "Especialistas en perforación de pozos de agua, maquinaria especializada, repuestos industriales y soluciones hidráulicas en Honduras.",
  keywords: [
    "perforación de pozos Honduras",
    "pozos de agua Honduras",
    "maquinaria hidráulica",
    "perforadoras Honduras",
    "CHAVEZ PERFORACIONES",
  ],
  authors: [{ name: "CHAVEZ'PERFORACIONES HN" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}