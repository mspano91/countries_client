"use client";
import React, { useState } from "react";
import style from "../../components/countries/countries.module.css";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAllCountries } from "@/redux/slice";
import { v4 } from "uuid";
import { getCountries } from "@/utils/services/getCountriesReq";
import Buttons from "../Buttons";

const Countries = () => {
  const dispatch = useDispatch();
  const countryList = useSelector((state) => state.paises.countries);
  const countriesPerPage = 6;

  //pagination
  const [visibleCountries, setVisibleCountries] = useState(countriesPerPage);

  const loadMoreCountries = () => {
    setVisibleCountries((prev) => prev + countriesPerPage);
  };

  const visibleCountryList = countryList.slice(0, visibleCountries);

  const fetchCountries = async () => {
    const countries = await getCountries();
    dispatch(setAllCountries(countries.map((pais) => ({ ...pais, id: v4() })))); //se le agrega un UUID una vez que trae la info de la api
  };

  useEffect(() => {
    !countryList.length && fetchCountries();
  }, []);

  return (
    <div>
      <h1 className={style.tittle}>How many countries you already know?</h1>
      <div className={style.containerDaddy}>
        {visibleCountryList
          ? visibleCountryList.map((country, index) => (
              <div className={style.containerChild} key={index}>
                <div className={style.containerFlag}>
                  <img
                    src={country.flag}
                    alt={`Flag of ${country.name}`}
                    className={style.flag}
                  />
                  <h4>{country?.name}</h4>
                </div>
                <div className={style.containerDetails}>
                  <Buttons />
                  {/* <p>Contininent: {country?.continent}</p>
                  <p>Capital: {country?.capital}</p>
                  <p>
                  Languages:{" "}
                  {country.language &&
                      Object.values(country.language).join(", ")}
                  </p> */}
                </div>
              </div>
            ))
          : null}
        {visibleCountries < countryList.length && (
          <div className={style.loadMoreButton}>
            <button onClick={loadMoreCountries}>Load More</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Countries;
