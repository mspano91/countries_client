import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countries: [],
  // europe: [],
  copyCountries: [],
  known: [],
  countriesToGo: [],
};

export const paisesSlice = createSlice({
  name: "paises",
  initialState,
  reducers: {
    setAllCountries: (state, action) => {
      state.countries = action.payload;
      state.copyCountries = action.payload;
    },
    // setEurope: (state, action) => {
    //   state.europe = action.payload;
    // },
    newFavorites: (state, action) => {
      const countryToAdd = action.payload;
      state.known.push(countryToAdd);
    },
    deleteFav: (state, action) => {
      const toDelete = action.payload;
      state.known = state.known.filter((pais) => pais.id !== toDelete.id);
      state.countriesToGo = [...state.countriesToGo, toDelete];
    },
    deleteToGo: (state, action) => {
      const toDelete = action.payload;
      state.countriesToGo = state.countriesToGo.filter(
        (pais) => pais.id !== toDelete
      );
    },
    CountryToGo: (state, action) => {
      const toGo = action.payload;
      state.countriesToGo.push(toGo);
    },
    changeList: (state, action) => {
      const done = action.payload;
      state.known = [...state.known, done];
      state.countriesToGo = state.countriesToGo.filter(
        (pais) => pais.id !== done.id
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setAllCountries,
  CountryToGo,
  setEurope,
  newFavorites,
  deleteFav,
  deleteToGo,
  changeList,
} = paisesSlice.actions;

export default paisesSlice.reducer;
