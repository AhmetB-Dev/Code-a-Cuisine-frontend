import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Code à Cuisine",
  description: "AI-powered recipe generator for the ingredients you already have.",
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="de">
      <body className="min-h-dvh bg-white text-stone-950 antialiased">
        {children}
      </body>
    </html>
  );
}
