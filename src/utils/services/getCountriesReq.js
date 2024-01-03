import axios from "axios";
export async function getCountries() {
  try {
    const response = await axios.get(`http://localhost:3001/countries`);
    const countries = response.data;
    return countries;
  } catch (error) {
    console.error("Error fetching countries:", error);
    throw error;
  }
}
