import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const inter = localFont({
  src: "./fonts/interVF.ttf",
  variable: "--font-inter",
  weight: "100 200 300 400 500 600 700 800 900",
});

const spaceGrotesk = localFont({
  src: "./fonts/SpaceGroteskVF.ttf",
  variable: "--font-space-grotesk",
  weight: "100 200 300 400 500 600 700",
});

export const metadata: Metadata = {
  title: "Dev Flow 👨🏾‍🚒",
  description:
    "Dev Flow is a collaborative Q&A platform where developers ask questions, share solutions, and grow their coding knowledge — just like Stack Overflow, but with a fresh vibe.",
  icons: {
    icon: "/images/site-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${spaceGrotesk.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
