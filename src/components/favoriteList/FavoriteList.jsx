"use client";
import React from "react";
import style from "@/components/favoriteList/favorite.module.css";
import KnownList from "./knownList/KnownList";
import NextTrips from "./Nex trips/NextTrips";

export default function FavoriteList() {
  return (
    <>
      <div className={style.god}>
        <h1 className={style.tittle}>wish list</h1>
        <div className={style.containerGranpa}>
          <KnownList />
          <NextTrips />
        </div>
      </div>
    </>
  );
}
