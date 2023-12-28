import Countries from "@/components/Countries";
import axios from "axios";

const URL = "https://restcountries.com/v3.1/independent?status=true";

async function fetchCountries() {
  const response = await axios.get(URL);
  const countries = response.data;
  return countries;
}

async function page() {
  const countryList = await fetchCountries();
  return <Countries countries={countryList} />;
}

export default page;
