"use client";
import React, { useEffect, useState } from "react";
import style from "../../components/countries/countries.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setAllCountries } from "@/redux/slice";
import { v4 } from "uuid";
import { getCountries } from "@/utils/services/getCountriesReq";

const Europa = () => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.paises.countries);
  const [europe, setEurope] = useState([]);

  const fetchCountries = async () => {
    if (allCountries.length == 0) {
      const countries = await getCountries();
      dispatch(
        setAllCountries(countries.map((pais) => ({ ...pais, id: v4() })))
      ); //se le agrega un UUID una vez que trae la info de la api
      const europeList = countries.filter((pais) =>
        pais?.continent.includes("Europe")
      );
      setEurope(europeList);
    } else {
      const europeList = allCountries.filter((pais) =>
        pais?.continent.includes("Europe")
      );
      setEurope(europeList);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <div>
      <h1>Europe</h1>
      <div className={style.containerDaddy}>
        {europe
          ? europe.map((country, index) => (
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
            ))
          : null}
      </div>
    </div>
  );
};

export default Europa;
