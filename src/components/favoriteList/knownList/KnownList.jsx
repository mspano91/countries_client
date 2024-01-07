import React from "react";
import style from "@/components/favoriteList/favorite.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteFav } from "@/redux/slice";

export default function KnownList() {
  const known = useSelector((state) => state.paises.known);
  const dispatch = useDispatch();

  const handleDelete = (country) => {
    dispatch(deleteFav(country));
  };

  return (
    <div className={style.containerDaddyA}>
      <h4>TRAVEL HISTORY</h4>
      {known &&
        known.map((country, index) => (
          <div className={style.containerChildA} key={index}>
            <img
              src={country.flag}
              alt={`Flag of ${country.name}`}
              className={style.flagA}
            />
            <h4 className={style.nameA}> {country.name}</h4>
            <button
              onClick={() => {
                handleDelete(country);
              }}
            >
              ❌
            </button>
          </div>
        ))}
    </div>
  );
}
