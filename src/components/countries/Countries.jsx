"use client";
import React from "react";
import style from "../../components/countries/countries.module.css";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAllCountries } from "@/redux/slice";

const Countries = () => {
  const dispatch = useDispatch();
  const countryList = useSelector((state) => state.paises.countries);

  async function fetchCountries() {
    try {
      // const response = await axios.get(`${URL}/all`);
      const response = await axios.get(`http://localhost:3001/countries`);
      const countries = response.data;
      dispatch(setAllCountries(countries));
    } catch (error) {
      console.error("Error fetching countries:", error);
      throw error;
    }
  }

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <div>
      <h1>Lista de Países</h1>
      <div className={style.containerDaddy}>
        {countryList &&
          countryList.map((country, index) => (
            <div className={style.containerChild} key={index}>
              <h4>{country.name}</h4>
              <img
                src={country.flag}
                alt={`Flag of ${country.name}`}
                className={style.flag}
              />
              <p>Contininent: {country?.continent}</p>
              <p>
                Languages:{" "}
                {country.language && Object.keys(country.language).join(", ")}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Countries;
