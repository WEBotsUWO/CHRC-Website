import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";
import "./globals.css";
import { publicAsset } from "./site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chrc.ca"),
  title: {
    default: "CHRC | Canadian Humanoid Robotics Competition",
    template: "%s | CHRC",
  },
  description:
    "Canada's first humanoid robotics competition for university and college teams, progressing from a humanoid hand in 2027 to a full humanoid event by 2030.",
  icons: {
    icon: publicAsset("/images/chrc-logo.jpeg"),
    shortcut: publicAsset("/images/chrc-logo.jpeg"),
  },
  openGraph: {
    title: "CHRC | Canadian Humanoid Robotics Competition",
    description:
      "Join Canada's first humanoid robotics competition for university and college teams.",
    type: "website",
    images: [
      {
        url: publicAsset("/og.png"),
        width: 1792,
        height: 896,
        alt: "CHRC - Canadian Humanoid Robotics Competition",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CHRC | Canadian Humanoid Robotics Competition",
    description:
      "Join Canada's first humanoid robotics competition for university and college teams.",
    images: [publicAsset("/og.png")],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
