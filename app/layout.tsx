import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// petit exercice : ajouter une Google Font
/*
const inter = Inter({
  variable: "--inter",
  subsets: ['latin']
});
*/

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// petit exercice : ajouter des MetaData, exemple les OpenGraph et Twitter Card
export const metadata: Metadata = {
  title: "Vision Ka | opticien à Paris",
  description: "+ de 300 marques de lunettes de soleil et de vue à Paris 3ème",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  // colorScheme: 'dark',
  //  manifest: '/favicon/site.webmanifest',
  icons: { icon: ['/favicon/favicon-32x32.png', '/favicon/favicon-16x16.png'], apple: '/favicon/apple-touch-icon.png' },
  openGraph: {
    type: 'website',
    siteName: "Vision Ka",
    url: 'https://visionka.vercel.app',
    title: "Vision Ka | opticien à Paris",
    description: "+ de 300 marques de lunettes de soleil et de vue à Paris 3ème",
    images: [
      {
        url: 'https://i.ibb.co/hsN3QLh/image.png',
        width: 1920,
        height: 960,
        alt: "boutique Vision Ka",
      },
    ],
    locale: 'fr-FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Vision Ka | opticien à Paris",
    description: "+ de 300 marques de lunettes de soleil et de vue à Paris 3ème",
    images: {
      url: 'https://i.ibb.co/hsN3QLh/image.png',
      alt: "boutique Vision Ka",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
