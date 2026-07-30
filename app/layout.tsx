import type { Metadata } from "next";
import { headers } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const headerList = await headers();
  const host = headerList.get("x-forwarded-host") ?? headerList.get("host");
  const protocol =
    headerList.get("x-forwarded-proto") ??
    (host?.includes("localhost") ? "http" : "https");
  const metadataBase = host
    ? new URL(`${protocol}://${host}`)
    : new URL("https://chrc.ca");

  return {
    metadataBase,
    title: {
      default: "CHRC | Canadian Humanoid Robotics Competition",
      template: "%s | CHRC",
    },
    description:
      "Canada's first university-exclusive humanoid robotics competition. Start a team, build ambitious systems, and help shape the road to 2030.",
    icons: {
      icon: "/images/chrc-logo.jpeg",
      shortcut: "/images/chrc-logo.jpeg",
    },
    openGraph: {
      title: "CHRC | The future is built here",
      description:
        "Join Canada's first university-exclusive humanoid robotics competition.",
      type: "website",
      images: [
        {
          url: "/og.png",
          width: 1792,
          height: 896,
          alt: "CHRC - Canadian Humanoid Robotics Competition",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "CHRC | The future is built here",
      description:
        "Join Canada's first university-exclusive humanoid robotics competition.",
      images: ["/og.png"],
    },
  };
}

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
