import "./globals.css";
import { Inter } from "next/font/google";
import AutoScrollToTop from "@/components/scrollToTop";
import dynamic from "next/dynamic";
import Footer from "@/components/footer/Footer";
import axios from "axios";
import Nav from "@/components/Nav";

const LazyClientRenderer = dynamic(
  () => import("@/features/lazyClientRenderer"),
  { ssr: false }
);

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Technicalsewa and solution",
//   description: "Technical sewa is all round solution for technical issues.",
// };

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const services = await axios
    .get(
      "https://www.technicalsewa.com/techsewa/masterconfig/publicmasterconfig/getServiceList"
    )
    .then((res) => {
      //set others brands and removing E-Commerce since it doesn't have image associated with it.
      return res?.data?.brands.filter((b: any) => b?.brand_id !== "78");
    });


  // gettrainingcategories
  const trainingCategories = await axios.get(
      "https://www.technicalsewa.com/techsewa/publiccontrol/publicmasterconfig/gettrainingcategories"
    )
    .then((res) => {
      return res.data;
    });

  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta property="og:image" content="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          type="image/x-icon"
          sizes="180x180"
          href="/favicon.ico"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
        />
      </head>
      <body className={inter.className}>
      <Nav services={services} trainingCategories={trainingCategories} />
        {children}
        <Footer />
        <AutoScrollToTop />
        <LazyClientRenderer />
      </body>
    </html>
  );
}
