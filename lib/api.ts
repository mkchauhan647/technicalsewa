import { baseUrl } from "@/public/baseUrl";
import axios from "axios";

export const api = axios.create({ baseURL: baseUrl });
export async function fetchClient(url: string, options = {}) {
  const defaultOptions = {};

  const mergedOptions = { ...defaultOptions, ...options };

  const response = await fetch(`${baseUrl}${url}`, mergedOptions as any);
  return response.json();
}
// for server side requests
export async function fetchServerClient(url: string, options = {}) {
  const defaultOptions = {
    // cache: "no-store",
    next: { revalidate: 120 }, // 2 minute cache timeout
  };

  const mergedOptions = { ...defaultOptions, ...options };

  const response = await fetch(`${baseUrl}${url}`, mergedOptions as any);
  return response.json();
}

export async function getTrainings() {
  try {
    const res = await fetchServerClient(
      "/techsewa/publiccontrol/publicmasterconfig/gettrainingDetails"
    );
    return res;
  } catch (error) {
    return [];
  }
}

export async function getTrainingDataById(id: string) {
  const formData = new FormData();
  formData.append("training_id", `${id}`);
  try {
    const res = await fetch(
      `${baseUrl}/techsewa/publiccontrol/publicmasterconfig/gettrainingDetails`,
      {
        method: "POST",
        body: formData,
        next: { revalidate: 120 }, // 2 minute cache timeout
        // cache: "no-store",
      }
    );
    return res.json();
  } catch (error) {
    return { error: true };
  }
}

// -------------------

export async function getTrainingCategoriesData() {
  try {
    const res = await fetch(
      `${baseUrl}/techsewa/publiccontrol/publicmasterconfig/gettrainingcategories`,
      {
        next: { revalidate: 120 }, // 2 minute cache timeout
      }
    );
    return res.json();
  } catch (error) {
    return [];
  }
}

export async function getBlogDataById(id: string) {
  const formData = new FormData();
  formData.append("id", id);
  try {
    const res = await fetch(
      `${baseUrl}/techsewa/publiccontrol/publicmasterconfig/getblogDetailsbyidd`,
      {
        method: "POST",
        body: formData,
        // cache: "no-store",
        next: { revalidate: 120 }, // 2 minute cache timeout
        // headers: {
        //   "Cache-Control": `max-age=${2 * 60}`, // max 30min cache
        // },
      }
    );

    return res.json();
  } catch (error) {
    return { error: true };
  }
}

// get blogs by category id

export async function getBlogsByCategoryId(id: string) {
  const formData = new FormData();
  formData.append("id", id);
  try {
    const res = await fetch(
      `${baseUrl}/techsewa/publiccontrol/publicmasterconfig/getblogDetailsbyCatid`,
      {
        method: "POST",
        body: formData,
        // cache: "no-store",
        next: { revalidate: 120 }, // 2 minute cache timeout
      }
    );

    return res.json();
  } catch (error) {
    return { error: true };
  }
}

// get seo by page url

export async function getSEOByPageURL(url: string) {
  const SEO_BASE_URL = "https://www.technicalsewa.com";
 
const params = {
  url: url,
  };

const res = axios.get(`${baseUrl}/techsewa/publiccontrol/publicmasterconfig/getSeoContent`, {
  params: params,
  headers: {
    'Content-Type': 'application/json',
  }
}).then(response => response.data)

return res

}

function isURL(str: string) {
  // Regular expression for a simple URL validation
  var urlRegex =
    /^(https?:\/\/)?([a-zA-Z0-9-]+\.){1,}([a-zA-Z]{2,})(:[0-9]+)?(\/.*)?$/;

  // Test the input string against the regex
  return urlRegex.test(str);
}
