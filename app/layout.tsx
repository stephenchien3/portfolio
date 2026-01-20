import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Stephen Chien",
    template: "%s | Stephen Chien",
  },
  description:
    "Stephen Chien is a researcher and developer working on healthcare technology, cognitive science, and software development. Explore his projects, research, and writings.",
  keywords: [
    "Stephen Chien",
    "software developer",
    "researcher",
    "Cajal Health",
    "cognitive science",
    "healthcare technology",
  ],
  authors: [{ name: "Stephen Chien" }],
  creator: "Stephen Chien",
  metadataBase: new URL("https://stephenchien.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://stephenchien.vercel.app",
    siteName: "Stephen Chien",
    title: "Stephen Chien",
    description:
      "Researcher and developer working on healthcare technology, cognitive science, and software development.",
  },
  twitter: {
    card: "summary",
    title: "Stephen Chien",
    description:
      "Researcher and developer working on healthcare technology, cognitive science, and software development.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://stephenchien.vercel.app",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Stephen Chien",
  url: "https://stephenchien.vercel.app",
  jobTitle: "Researcher and Developer",
  description:
    "Researcher and developer working on healthcare technology, cognitive science, and software development.",
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="latex-dark">{children}</body>
    </html>
  );
}
