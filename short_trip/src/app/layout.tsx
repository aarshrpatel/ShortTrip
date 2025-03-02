import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import PageWrapper from "@/components/PageWrapper";
// import { SpeedInsights } from "@vercel/speed-insights/next";

// Enhanced SEO metadata
export const metadata: Metadata = {
  title: "Short Trip",
  description: "Your Friendly Community Gas Station",
  openGraph: {
    title: "Short Trip",
    description: "Your Friendly Community Gas Station",
    url: "https://shorttrip.com",
    siteName: "Short Trip",
    images: [
      {
        url: "https://shorttrip.com/images/logo.png", // Replace with your full URL to the image in your public folder
        width: 1200,
        height: 630,
        alt: "Short Trip - Fueling Your Journey",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Short Trip",
    description: "Your Friendly Community Gas Station",
    images: ["https://shorttrip.com/images/logo.png"], // Replace with your full URL
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-roboto">
        {/*<SpeedInsights />*/}
        <Navbar />
        <PageWrapper>{children}</PageWrapper>
        <Footer />
      </body>
    </html>
  );
}
