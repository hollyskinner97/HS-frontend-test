const API_URL = "http://localhost:3000/comms/your-next-delivery";

export const fetchUserComms = async (userId: string) => {
  try {
    const response = await fetch(`${API_URL}/${userId}`);
    if (!response.ok) throw new Error("Failed to fetch comms data");
    return await response.json();
  } catch (error) {
    console.error("Error fetching comms data:", error);
    return null;
  }
};
