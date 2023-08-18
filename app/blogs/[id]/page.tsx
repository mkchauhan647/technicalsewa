import Nav from "@/components/Nav";
import { SEOBase } from "@/components/SEOBase";
import Footer from "@/components/footer/Footer";
import { getBlogDataById } from "@/lib/api";
import Head from "next/head";
import React from "react";

const page = async ({ params }: any) => {
  let page_url = params.slug;

  const blogData = await getBlogDataById(page_url);

  const data = blogData?.[0] || blogData;

  const pageTitle = `${data?.blog_name} - Blog`;
  return (
    <>
      <Head>
        <SEOBase title={pageTitle} />
        {/* Open Graph tags */}
        <meta property="og:title" content={`${pageTitle}`} />
        
        <meta
          property="og:image"
          content={data?.filename ? data?.filename : "/favicon.ico"}
        />
        <meta
          property="og:url"
          content={`https://technicalsewa.com/blogs/${data?.blog_id}`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content=" technicalsewa.com Repair Services on Demand "
        />
        <meta property="og:locale" content="en_US" />
      </Head>
      <Nav />
      <div className="container flex justify-center py-6 mx-auto">
        <div className="max-w-[1200px]">
          <h1 className="text-[30px] mb-2">{data?.blog_name}</h1>
          {data?.filename && (
            <div className="w-full h-[600px]">
              <img className="object-cover w-full h-full" src={data.filename} />
            </div>
          )}

          {data?.blog_desc && (
            <div
              className="mt-6"
              dangerouslySetInnerHTML={{ __html: data?.blog_desc }}
            ></div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;

// export async function generateMetadata() {
//   // const seocontet = await fetch(
//   //   "https://smartcare.com.np/techsewa/publiccontrol/publicmasterconfig/getSeoContent?url=https://smartcare.com.np/blogs"
//   // );
//   // const seocontetdata:[] = await seocontet.json();

//   return {
//     title: `SingleBlog | Technical sewa`,
//   };
// }
