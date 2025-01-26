import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/app/dark-theme";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Yass.",
  description:
    "Yass. - Explore my portfolio as a full-stack developer specializing in modern web technologies, AI solutions, and cutting-edge design. Connect on GitHub and LinkedIn.",
  keywords: [
    "Yassine",
    "Full-Stack Developer",
    "Entrepreneur",
    "Web Development",
    "AI Solutions",
    "Portfolio",
    "GitHub",
    "LinkedIn",
  ],
  openGraph: {
    title: "Yass.",
    description:
      "Explore my portfolio as a full-stack developer specializing in modern web technologies, AI solutions, and cutting-edge design.",
    url: "https://yourwebsite.com",
    siteName: "Yass.",

    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yass. - Full-Stack Developer & Entrepreneur",
    description:
      "Explore my portfolio as a full-stack developer specializing in modern web technologies, AI solutions, and cutting-edge design.",
    images: ["https://yasine.it/icon.svg"],
  },
  icons: {
    shortcut: "/favicon.ico", // Replace with your favicon
    apple: "/apple-touch-icon.png", // Replace with your Apple touch icon
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/icon.svg", // Replace with your favicon
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/icon.svg", // Replace with your favicon
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/icon.svg" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
      <Analytics />
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-KZJ6ZHDE2Z"
      />
      <Script id="google-analytics">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KZJ6ZHDE2Z');
          `}
      </Script>
    </html>
  );
}
