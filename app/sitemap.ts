import {
  fetchServerClient,
  getTrainingCategoriesData,
  getTrainings,
} from "@/lib/api";
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

  const trainings = await getTrainings();

  const trainingsSiteMap = trainings.map((t: any) => {
    return {
      url: `${siteUrl}/training/${t?.training_title
        ?.replaceAll(" ", "-")
        .toLowerCase()}`,
      changeFrequency: "monthly",
      priority: 0.8,
    };
  });

  const trainingCategories = await getTrainingCategoriesData();

  const blogs = await fetchServerClient(
    "/techsewa/publiccontrol/publicmasterconfig/getblogdetails"
  );

  const blogsSiteMap = blogs.map((b: any) => {
    return {
      url: `${siteUrl}/blog/${b?.blog_name
        ?.replaceAll(" ", "-")
        .toLowerCase()}/${b?.blog_id}`,
      changeFrequency: "daily",
      priority: 0.8,
    };
  });

  const blogCatsSiteMap = trainingCategories.map((c: any) => {
    return {
      url: `${siteUrl}/blogs/${c?.text
        ?.replaceAll(" ", "-")
        .toLowerCase()}/${c?.value}`,
      changeFrequency: "weekly",
      priority: 0.8,
    };
  });

  const services = await fetchServerClient(
    "/techsewa/masterconfig/publicmasterconfig/getSliderListpop1"
  );

  const servicesSiteMap = services.brands.map((item: any) => {
    return {
      url: `${siteUrl}/service/${item?.url_product_name}`,
      changeFrequency: "monthly",
      priority: 0.8,
    };
  });

  const partPurjaList = await fetchServerClient(
    `/techsewa/publiccontrol/publicmasterconfig/getfeaturedDetails`
  );

  const partPurjaSiteMap = partPurjaList.map((item: any) => {
    const slug = item?.page_url.replace(/\s+/g, "-");
    return {
      url: `${siteUrl}/partpurja/${slug}`,
      changeFrequency: "monthly",
      priority: 0.8,
    };
  });

  return [
    ...routesSiteMap,
    ...blogsSiteMap,
    ...blogCatsSiteMap,
    ...trainingsSiteMap,
    ...servicesSiteMap,
    ...partPurjaSiteMap,
  ];
}
