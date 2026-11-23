import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Bella Pizza | Pizzaria Artesanal",
  description:
    "As melhores pizzas artesanais da cidade, feitas com amor e ingredientes frescos.",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR" className={poppins.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}