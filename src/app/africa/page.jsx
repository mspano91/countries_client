"use client";
const URL = "https://restcountries.com/v3.1";
import axios from "axios";

async function fetchAfrica() {
  try {
    const response = await axios.get(`${URL}/region/africa`);
    const africaList = response.data;
    return africaList;
  } catch (error) {
    console.error("Error fetching countries:", error);
    throw error;
  }
}

async function homeAfrica() {
  const africaList = await fetchAfrica();
  return <Africa africa={africaList} />;
}

export default homeAfrica;
