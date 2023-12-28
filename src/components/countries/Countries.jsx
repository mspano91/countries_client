"use client";
import React from "react";
import style from "../../components/countries/countries.module.css";

const Countries = ({ countries }) => {
  return (
    <div>
      <h1>Lista de Países</h1>
      <div className={style.containerDaddy}>
        {countries &&
          countries.map((country, index) => (
            <div className={style.containerChild} key={index}>
              <h4>{country.name?.common}</h4>
              <img
                src={country.flags.png}
                alt={`Flag of ${country.name.common}`}
                className={style.flag}
              />
              <p>Contininent:{country?.continents}</p>
              <p>
                Languages:{" "}
                {country.languages && Object.keys(country.languages).join(", ")}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Countries;
