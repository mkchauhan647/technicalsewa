import { baseUrl } from "@/public/baseUrl";

export async function getTrainingCategoriesData() {
  try {
    const res = await fetch(
      `${baseUrl}/techsewa/publiccontrol/publicmasterconfig/gettrainingcategories`,
      {
        headers: {
          "Cache-Control": `max-age=${60 * 60}`, // max 1 hour cache
        },
      }
    );
    return res.json();
  } catch (error) {
    return [];
  }
}

export async function getBlogDataById(id: string) {
  const formData = new FormData();
  formData.append("id", `${id}`);
  try {
    const res = await fetch(
      `${baseUrl}/techsewa/publiccontrol/publicmasterconfig/getblogDetailsbyid`,
      {
        method: "POST",
        body: formData,
        headers: {
          "Cache-Control": `max-age=${60 * 60}`, // max 1 hour cache
        },
      }
    );
    return res.json();
  } catch (error) {
    return { error: true };
  }
}
