import { baseUrl } from "@/public/baseUrl";

export async function getTrainings() {
  try {
    const res = await fetch(
      `${baseUrl}/techsewa/publiccontrol/publicmasterconfig/gettrainingDetails`,
      {
        headers: {
          "Cache-Control": `max-age=${2 * 60}`, // max 30min cache
        },
      }
    );
    return res.json();
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
        headers: {
          "Cache-Control": `max-age=${2 * 60}`, // max 30min cache
        },
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
        headers: {
          "Cache-Control": `max-age=${2 * 60}`, // max 30min cache
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
  formData.append("id", id);
  try {
    const res = await fetch(
      `${baseUrl}/techsewa/publiccontrol/publicmasterconfig/getblogDetailsbyidd`,
      {
        method: "POST",
        body: formData,
        headers: {
          "Cache-Control": `max-age=${2 * 60}`, // max 30min cache
        },
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
        headers: {
          "Cache-Control": `max-age=${2 * 60}`, // max 30min cache
        },
      }
    );

    return res.json();
  } catch (error) {
    return { error: true };
  }
}
