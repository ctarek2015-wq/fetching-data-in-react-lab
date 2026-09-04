const API_URL = "https://swapi.info/api/starships";

const index = async () => {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Failed to fetch starships.");
    const data = await res.json();
    return data;
  } catch (error) {}
  console.error("starshipService error:", error);
  throw error;
};

export { index };
