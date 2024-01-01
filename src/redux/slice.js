import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countries: [],
};

export const paisesSlice = createSlice({
  name: "paises",
  initialState,
  reducers: {
    setAllCountries: (state, action) => {
      state.countries = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAllCountries } = paisesSlice.actions;

export default paisesSlice.reducer;
