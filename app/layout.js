import { Geist, Geist_Mono } from "next/font/google";
import { useEffect, useState } from "react";
import "./globals.css";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Layout({ children }) {   // ✅ Use the correct React prop signature
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div>Loading...</div>;  // Prevent hydration issues
  }

  return (
    <html lang="en">                  {/* ✅ Add proper HTML structure */}
      <head>
        <title>Airbnb Clone</title>   {/* ✅ Include title */}
        <meta name="description" content="Airbnb clone using Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
// ✅ Use the correct React prop signature