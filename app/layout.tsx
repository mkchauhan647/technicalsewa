import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Technicalsewa and solution",
  description: "Technical sewa is all round solution for technical issues.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <link rel="apple-touch-icon" type="image/x-icon" sizes="180x180" href="/../assets/apple-icon.png"/>
        
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
