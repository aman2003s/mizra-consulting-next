import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Source_Sans_3, Playfair_Display } from "next/font/google";
import './globals.scss'
import Navbar from '../components/Navbar';
import Image from "next/image";
import homeBackground from "../../public/bg-wireframe.svg";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sourceSansPro = Source_Sans_3({
  variable: "--font-source-sans-pro",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Mizra Consulting - Product-Led Growth & Digital Solutions",
  description: "From Idea to Execution - We Design, Build & Scale Digital Products That Deliver Results. Specializing in automation, CRM solutions, UX/UI design, and MVP development.",
  keywords: "product-led growth, digital solutions, automation, CRM, UX/UI design, MVP development, consulting",
  authors: [{ name: "Mizra Consulting" }],
  creator: "Mizra Consulting",
  publisher: "Mizra Consulting",
  robots: "index, follow",
  openGraph: {
    title: "Mizra Consulting - Product-Led Growth & Digital Solutions",
    description: "From Idea to Execution - We Design, Build & Scale Digital Products That Deliver Results",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mizra Consulting - Product-Led Growth & Digital Solutions",
    description: "From Idea to Execution - We Design, Build & Scale Digital Products That Deliver Results",
  },
  icons: {
    icon: [
      {
        url: "/mizra-logo.svg",
        type: "image/svg+xml",
      },
      {
        url: "/favicon.ico",
        sizes: "32x32",
        type: "image/x-icon",
      },
    ],
    shortcut: "/favicon.ico",
    apple: "/mizra-logo.svg",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${sourceSansPro.variable} ${playfairDisplay.variable}`}>
        <div className="homeBackgroundImage">
          <Image src={homeBackground} alt="Home Background" />
        </div>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
