import { MetadataRoute } from "next";

const siteUrl = "https://technicalsewa.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routesSiteMap = [
    "",
    "/trainings",
    "/blogs",
    "/service",
    "/professionals",
    "/partpurja",
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: "yearly",
    priority: 1,
    lastModified: new Date(),
  }));

  const services = await fetch(
    "https://smartcare.com.np/techsewa/masterconfig/publicmasterconfig/getSliderListpop1"
  ).then((response) => response.json());

  const servicesSiteMap = services.brands.map((item: any) => {
    return {
      url: `${siteUrl}/service/${item?.url_product_name}`,
      changeFrequency: "monthly",
      priority: 0.8,
    };
  });

  const partPurjaList = await fetch(
    `https://smartcare.com.np/techsewa/publiccontrol/publicmasterconfig/getfeaturedDetails`
  ).then((response) => response.json());

  const partPurjaSiteMap = partPurjaList.map((item: any) => {
    const slug = item?.page_url.replace(/\s+/g, "-");
    return {
      url: `${siteUrl}/partpurja/${slug}`,
      changeFrequency: "monthly",
      priority: 0.8,
    };
  });

  return [...routesSiteMap, ...servicesSiteMap, ...partPurjaSiteMap];
}
