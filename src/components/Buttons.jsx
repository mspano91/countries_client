import React from "react";
import style from "@/components/countries/countries.module.css";
import { useDispatch } from "react-redux";
import { newFavorites, CountryToGo } from "@/redux/slice";

export default function Buttons({ country }) {
  const dispatch = useDispatch();

  const handleAddFav = (country) => {
    dispatch(newFavorites(country));
  };
  const handleToGo = (country) => {
    dispatch(CountryToGo(country));
  };

  return (
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
  );
}
