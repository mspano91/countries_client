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
  },
});

// Action creators are generated for each case reducer function
export const { setAllCountries, newFavorites } = paisesSlice.actions;

export default paisesSlice.reducer;
