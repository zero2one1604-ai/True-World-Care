import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://thetrueworldcare.com"),
  title: {
    default: "The Trueworld Care | Daily Wellness for Real Progress",
    template: "%s | Trueworld Care",
  },
  description:
    "Trueworld Care creates Ayurveda-backed wellness supplements that support weight loss, metabolism, detox, and energy — with steady, real results.",
  keywords: [
    "Trueworld Care",
    "weight loss capsules",
    "Ayurvedic supplements",
    "boost metabolism",
    "detox capsules",
    "reduce bloating",
    "gut health support",
    "True Vita capsule",
    "Shapella weight loss",
    "Easy Fresh herbal powder"
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://thetrueworldcare.com",
    title: "The Trueworld Care | Feel Lighter, Stronger, Every Day",
    description:
      "Thoughtfully formulated capsules and herbal blends for sustainable weight loss and metabolism support. Real progress you can feel.",
    siteName: "The Trueworld Care",
    images: [
      {
        url: "/image/banner.png",
        width: 1200,
        height: 630,
        alt: "Trueworld Care Wellness Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Trueworld Care | Ayurveda Meets Fitness",
    description:
      "Daily wellness support for metabolism, energy and detox — without shortcuts.",
    images: ["/image/banner.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://thetrueworldcare.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
