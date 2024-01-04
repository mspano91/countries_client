"use client";
import React from "react";
import style from "@/components/favoriteList/favorite.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteFav, deleteToGo } from "@/redux/slice";

export default function FavoriteList() {
  const dispatch = useDispatch();
  const known = useSelector((state) => state.paises.known);
  const toGo = useSelector((state) => state.paises.countriesToGo);

  const handleDelete = (id) => {
    dispatch(deleteFav(id));
  };
  const handleDeleteToGo = (id) => {
    dispatch(deleteToGo(id));
  };

  return (
    <>
      <div className={style.god}>
        <h1>wish list</h1>
        <div className={style.containerGranpa}>
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
                      handleDelete(country.id);
                    }}
                  >
                    ❌
                  </button>
                </div>
              ))}
          </div>
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
                        <button className={style.buttons}>✔</button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
