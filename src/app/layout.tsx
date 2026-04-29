import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "NovaHaus Property Management",
  description: "Founded in 2023 by Eric Ng and Simon Chong, we provide premium, fully furnished student housing in Sunway and Subang. With over 200 satisfied residents, we go beyond accommodation to create secure, designer homes that foster academic success and personal growth.",
  icons: {
    icon: "/nova-logo.png",
    apple: "/nova-logo.png",
  },
  openGraph: {
    title: "NovaHaus Property Management",
    description: "Founded in 2023 by Eric Ng and Simon Chong, we provide premium, fully furnished student housing in Sunway and Subang. With over 200 satisfied residents, we go beyond accommodation to create secure, designer homes that foster academic success and personal growth.",
    siteName: "NovaHaus Property Management",
    images: [
      {
        url: "/nova-logo.png",
        width: 1200,
        height: 630,
        alt: "NovaHaus Logo",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
