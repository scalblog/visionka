import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export const metadata: Metadata = {
  title: "Vision Ka | opticien à Paris",
  description: "+ de 300 marques de lunettes de soleil et de vue à Paris 3ème",
  robots: "index, follow",
  icons: { icon: ['/favicon/favicon-32x32.png'], apple: '/favicon/apple-touch-icon.png' },
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
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
