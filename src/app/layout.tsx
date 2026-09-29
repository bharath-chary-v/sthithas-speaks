import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AnimatedBackground from "@/components/AnimatedBackground";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sthitha's Speaks | Talks & Seminars by Jeevan",
  description:
    "Sthitha's Speaks — motivational talks, seminars and training by Jeevan for schools, colleges and corporates. 150+ sessions across Telangana and Andhra Pradesh.",
  keywords: [
    "Sthitha's Speaks",
    "Jeevan speaker",
    "motivational speaker Hyderabad",
    "college seminars Telangana",
    "career guidance sessions",
    "corporate training Hyderabad",
    "teacher parent engagement",
  ],
  openGraph: {
    title: "Sthitha's Speaks | Talks & Seminars by Jeevan",
    description:
      "150+ sessions in schools, colleges and corporates across Telangana and Andhra Pradesh.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <AnimatedBackground />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
