"use client";

import React from "react";

const Countries = ({ countries }) => {
  return (
    <div>
      <h1>Lista de Países</h1>
      <ul>
        {countries &&
          countries.map((country, index) => (
            <li key={index}>{country.name.official}</li>
          ))}
      </ul>
    </div>
  );
};

export default Countries;
