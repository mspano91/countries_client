"use client";
import React from "react";
import style from "../../components/countries/countries.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteFav } from "@/redux/slice";

export default function FavoriteList() {
  const dispatch = useDispatch();
  const favoritos = useSelector((state) => state.paises.favorites);
  console.log(favoritos);

  const handleDelete = (id) => {
    dispatch(deleteFav(id));
  };

  return (
    <div>
      <h1>My list</h1>
      <div className={style.containerDaddy}>
        {favoritos &&
          favoritos.map((country, index) => (
            <div className={style.containerChild} key={index}>
              <h4>{country.name}</h4>
              <img
                src={country.flag}
                alt={`Flag of ${country.name}`}
                className={style.flag}
              />
              <p>Contininent: {country?.continent}</p>
              <p>id: {country?.id}</p>
              <p>Capital: {country?.capital}</p>
              <p>
                Languages:{" "}
                {country.language && Object.values(country.language).join(", ")}
              </p>
              <button
                onClick={() => {
                  handleDelete(country.id);
                }}
              >
                ❌quitar
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
