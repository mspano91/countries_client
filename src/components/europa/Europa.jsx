"use client";
import React, { useEffect, useState } from "react";
import style from "@/components/countries/countries.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setAllCountries } from "@/redux/slice";
import { v4 } from "uuid";
import { getCountries } from "@/utils/services/getCountriesReq";
import Buttons from "../Buttons";

const Europa = () => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.paises.countries);
  const [europe, setEurope] = useState([]);

  //pagination
  const countriesPerPage = 6;
  const [visibleCountries, setVisible] = useState(countriesPerPage);

  const loadMoreCountries = () => {
    setVisible((prev) => prev + countriesPerPage);
  };

  const visibleEuropeList = europe.slice(0, visibleCountries);

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
      <h1 className={style.tittle}>Europe</h1>
      <div className={style.containerDaddy}>
        {visibleEuropeList
          ? visibleEuropeList.map((country, index) => (
              <div className={style.containerChild} key={index}>
                <img
                  src={country.flag}
                  alt={`Flag of ${country.name}`}
                  className={style.flag}
                />
                <h4>{country.name}</h4>
                <Buttons country={country} />
                <div className={style.containerDetails}></div>
              </div>
            ))
          : null}

        {visibleCountries < allCountries.length && (
          <div className={style.loadMoreButton}>
            <button onClick={loadMoreCountries}>Load More</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Europa;
