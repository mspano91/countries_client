import React from "react";
import style from "@/components/favoriteList/favorite.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteToGo, changeList } from "@/redux/slice";

export default function NextTrips() {
  const toGo = useSelector((state) => state.paises.countriesToGo);
  const dispatch = useDispatch();

  const handleDeleteToGo = (id) => {
    dispatch(deleteToGo(id));
  };

  const handleDone = (country) => {
    dispatch(changeList(country));
  };

  return (
    <div>
      <h4>Next trips</h4>
      <div className={style.containerDaddy}>
        {toGo &&
          toGo.map((country, index) => (
            <div className={style.containerChild} key={index}>
              <img
                src={country.flag}
                alt={`Flag of ${country.name}`}
                className={style.flag}
              />
              <h4>{country.name}</h4>
              <div className={style.ContainerButtonsPosition}>
                <div className={style.ContainerButtons}>
                  <button
                    className={style.buttons}
                    onClick={() => {
                      handleDeleteToGo(country.id);
                    }}
                  >
                    ❌
                  </button>
                  <button
                    className={style.buttons}
                    onClick={() => {
                      handleDone(country);
                    }}
                  >
                    ✔
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
