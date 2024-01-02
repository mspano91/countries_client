import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countries: [],
  copyCountries: [],
  favorites: [],
};

export const paisesSlice = createSlice({
  name: "paises",
  initialState,
  reducers: {
    setAllCountries: (state, action) => {
      state.countries = action.payload;
      state.copyCountries = action.payload;
    },
    newFavorites: (state, action) => {
      const countryToAdd = action.payload;
      state.favorites.push(countryToAdd);
    },
    deleteFav: (state, action) => {
      console.log(action.payload);
      const toDelete = action.payload;
      state.favorites = state.favorites.filter((pais) => pais.id !== toDelete);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAllCountries, newFavorites, deleteFav } = paisesSlice.actions;

export default paisesSlice.reducer;
