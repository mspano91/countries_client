"use client";
import React from "react";
import style from "../../components/countries/countries.module.css";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAllCountries, newFavorites, CountryToGo } from "@/redux/slice";
import { v4 } from "uuid";
import { getCountries } from "@/utils/services/getCountriesReq";

const Countries = () => {
  const dispatch = useDispatch();
  const countryList = useSelector((state) => state.paises.countries);

  const handleAddFav = (country) => {
    dispatch(newFavorites(country));
  };
  const handleToGo = (country) => {
    dispatch(CountryToGo(country));
  };

  const fetchCountries = async () => {
    const countries = await getCountries();
    dispatch(setAllCountries(countries.map((pais) => ({ ...pais, id: v4() })))); //se le agrega un UUID una vez que trae la info de la api
  };

  useEffect(() => {
    !countryList.length && fetchCountries();
  }, []);

  return (
    <div>
      <h1>All countries</h1>
      <div className={style.containerDaddy}>
        {countryList
          ? countryList.map((country, index) => (
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
                  {/* <p>Contininent: {country?.continent}</p>
                  <p>Capital: {country?.capital}</p>
                  <p>
                    Languages:{" "}
                    {country.language &&
                      Object.values(country.language).join(", ")}
                  </p> */}
                  <div className={style.ContainerButtonsPosition}>
                    <div className={style.ContainerButtons}>
                      <button
                        className={style.buttons}
                        onClick={() => {
                          handleAddFav(country);
                        }}
                      >
                        ✔ add known
                      </button>

                      <button
                        className={style.buttons}
                        onClick={() => {
                          handleToGo(country);
                        }}
                      >
                        ✈ add to Go!
                      </button>
                      <button className={style.buttons}>🔔info</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Countries;
