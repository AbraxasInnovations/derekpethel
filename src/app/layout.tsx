import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Derek Pethel | Founder, Abraxas Innovations (SPV, Section 301 Refunds)",
  description: "Derek Pethel is the founder of Abraxas Innovations, specializing in SPV structures and Section 301 tariff refunds. Expert in trade finance, non-custodial asset management, and cybersecurity.",
  keywords: "Derek Pethel, Abraxas Innovations, SPV, Section 301, tariff refunds, trade finance, asset management, cybersecurity",
  authors: [{ name: "Derek Pethel" }],
  creator: "Derek Pethel",
  publisher: "Derek Pethel",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://derekpethel.com",
    siteName: "Derek Pethel",
    title: "Derek Pethel | Founder, Abraxas Innovations",
    description: "Founder of Abraxas Innovations, specializing in SPV structures and Section 301 tariff refunds.",
    images: [
      {
        url: "https://derekpethel.com/media/derek-pethel.png",
        width: 1200,
        height: 630,
        alt: "Derek Pethel, founder of Abraxas Innovations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Derek Pethel | Founder, Abraxas Innovations",
    description: "Founder of Abraxas Innovations, specializing in SPV structures and Section 301 tariff refunds.",
    images: ["https://derekpethel.com/media/derek-pethel.png"],
  },
  alternates: {
    canonical: "https://derekpethel.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Derek Pethel",
    "jobTitle": "Founder & Managing Director",
    "affiliation": {
      "@type": "Organization",
      "name": "Abraxas Innovations"
    },
    "url": "https://derekpethel.com/",
    "sameAs": [
      "https://x.com/TheDerekPethel",
      "https://www.linkedin.com/in/derekpethel",
      "https://derekpethel.medium.com",
      "https://derekpethel.substack.com",
      "https://usfinancemoves.com/",
      "https://abraxasinnovations.com/",
      "https://abxinnovate.com/"
    ],
    "image": "https://derekpethel.com/media/derek-pethel.png",
    "knowsAbout": [
      "M&A", "Private Equity", "LBOs", "Section 301 tariff refunds",
      "Non-custodial asset management", "Cybersecurity", "Trade finance", "SPVs"
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Michroma&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body
        className="antialiased bg-black text-white"
      >
        {children}
      </body>
    </html>
  );
}
