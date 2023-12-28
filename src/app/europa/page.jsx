import Europa from "@/components/europa/europa";
import axios from "axios";

const URL = "https://restcountries.com/v3.1";

async function fetchAEuropa() {
  try {
    const response = await axios.get(`${URL}/region/europe`);
    const europeList = response.data;
    return europeList;
  } catch (error) {
    console.error("Error fetching countries:", error);
    throw error;
  }
}

async function europa() {
  const europeList = await fetchAEuropa();
  return <Europa europa={europeList} />;
}

export default europa;
