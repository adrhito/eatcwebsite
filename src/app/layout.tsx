import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { siteConfig } from "../config/siteConfig";

export const metadata: Metadata = {
  title: siteConfig.meta.title,
  description: siteConfig.meta.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://db.onlinewebfonts.com/c/2bdc8fe82a76b8d30126b56a085ac763?family=Copernicus-Bold"
          rel="stylesheet"
        />
        <link
          href="https://db.onlinewebfonts.com/c/5b2e36f69d0c436561c98c0675b8b763?family=Copernicus+Trial+Book"
          rel="stylesheet"
        />
        <link
          href="https://db.onlinewebfonts.com/c/02371f4aed177647051bc29dcbd5dc0e?family=Copernicus+Trial+Medium"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
