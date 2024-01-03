"use client";
import React, { useEffect } from "react";
import style from "../../components/countries/countries.module.css";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
// import { v4 } from "uuid";
// import { setEurope } from "@/redux/slice";

const Europa = () => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.paises.countries);

  // async function fetchAEuropa() {
  //   try {
  //     const response = await axios.get(
  //       `http://localhost:3001/countries/europe`
  //     );
  //     const europeList = response.data;
  //     dispatch(setEurope(europeList.map((pais) => ({ ...pais, id: v4() }))));
  //   } catch (error) {
  //     console.error("Error fetching countries:", error);
  //     throw error;
  //   }
  // }
  // async function fetchAEuropa() {
  //   try {
  //     const response = await axios.get(
  //       `http://localhost:3001/countries/europe`
  //     );
  //     const europeList = response.data;
  //     dispatch(setEurope(europeList.map((pais) => ({ ...pais, id: v4() }))));
  //   } catch (error) {
  //     console.error("Error fetching countries:", error);
  //     throw error;
  //   }
  // }

  // useEffect(() => {
  //   fetchAEuropa();
  // }, []);

  const europeList = allCountries.filter((pais) => pais?.continent == "Europe");
  console.log(europeList);
  return (
    <div>
      <h1>Europe</h1>
      <div className={style.containerDaddy}>
        {europeList &&
          europeList.map((country, index) => (
            <div className={style.containerChild} key={index}>
              <h4>{country.name}</h4>
              <img
                src={country.flag}
                alt={`Flag of ${country.name}`}
                className={style.flag}
              />
              <div className={style.containerDetails}>
                <p>Contininent: {country?.continent}</p>
                <p>id: {country?.id}</p>
                <p>
                  Languages:{" "}
                  {country.language &&
                    Object.values(country.language).join(", ")}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Europa;
