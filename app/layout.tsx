import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stephen Chien - Curriculum Vitae",
  description: "Academic CV and professional portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="latex-dark-auto">{children}</body>
    </html>
  );
}
