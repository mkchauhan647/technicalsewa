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
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://technicalsewa.com/" />
        
        <meta
          name="google-site-verification"
          content="s4Xt-ttgXFwLDQmM-b_pAkaY52cuovGGAnlXMPIGZRA"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="keywords"
          content="technicalsewa, Technicalsewa and solution, Appliances Repair, popular Brands, Warranty Products, Electrician & Plumber, Air-Purifier/Humidifier, Mobiles & Tabs, cctv Repair Service, Computer/Printer, Medical Equipment, Drone Repair, Carpenter Service, Cleaning & Pest Control"
        />
        <meta
          name="author"
          content="TechnicalSewa,Professional Repair Services on Demand"
        />
        <meta
          property="og:title"
          content="Professional Repair Services on Demand"
        />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:site_name"
          content=" technicalsewa.com Repair Services on Demand "
        />
        <meta
          property="og:description"
          content="Appliances Repair, popular Brands, Warranty Products, Electrician & Plumber, Air-Purifier/Humidifier, Mobiles & Tabs, tv , washing machine, micro ovan repair service in kathmandu"
        />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:url" content="https://technicalsewa.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Professional Repair Services on Demand"
        />
        <meta
          name="twitter:description"
          content="Your website description goes here"
        />
        <meta
          name="twitter:image"
          content="https://technicalsewa.com/assets/ts-final-logo.png"
        />

        {/* site map */}
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#005ae0" />
        <meta
          name="description"
          content="Welcome to Technical Sewa, a one-stop-shop for all of electronic repair needs. We specialize in repairing a wide range of appliances. "
        />
        <meta name="robots" content="max-image-preview:large" />
        <meta
          name="generator"
          content="repairs on demand, drone repair service in nepal, refrigerator repair service in nepal, tv repairs near me, tv repair service in nepal, plumbing service in nepal"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
