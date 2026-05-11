import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Nunito_Sans } from "next/font/google";
import "leaflet/dist/leaflet.css";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Explorar | Airbnb Clone",
  description: "Interfaz de exploracion inspirada en Airbnb construida con Next.js"
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body className={`${nunitoSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}