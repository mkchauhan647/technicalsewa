import { baseUrl } from "@/public/baseUrl";

export async function getServiceListData() {
    const res = await fetch(
      `${baseUrl}/techsewa/publiccontrol/publicmasterconfig/getServiceList`,
      {
        headers: {
          "Cache-Control": `max-age=${60 * 60}`, // max 1 hour cache
        },
      }
    );
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
  
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
  
    return res.json();
  }