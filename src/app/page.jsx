import Countries from "@/components/countries/Countries";
import axios from "axios";

// const URL = "https://restcountries.com/v3.1";

async function fetchCountries() {
  try {
    // const response = await axios.get(`${URL}/all`);
    const response = await axios.get(`http://localhost:3001/countries`);
    const countries = response.data;
    return countries;
  } catch (error) {
    console.error("Error fetching countries:", error);
    throw error;
  }
}

async function page() {
  const countryList = await fetchCountries();
  return <Countries countries={countryList} />;
}

export default page;
