import FacebookPixel from "@/components/FacebookPixel";
import "./globals.css";
import { Inter } from "next/font/google";
// import FacebookMessenger from "@/components/FacebookMessenger";
import AutoScrollToTop from "@/components/scrollToTop";
import CallToWhatsapp from "@/components/CallToWhatsapp";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Technicalsewa and solution",
//   description: "Technical sewa is all round solution for technical issues.",
// };

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
        <link
          rel="apple-touch-icon"
          type="image/x-icon"
          sizes="180x180"
          href="/../assets/apple-icon.png"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
        />
      </head>
      <body className={inter.className}>
        {children}
        <FacebookPixel />
        {/* <FacebookMessenger /> */}
        <CallToWhatsapp />
        <AutoScrollToTop />
      </body>
    </html>
  );
}
