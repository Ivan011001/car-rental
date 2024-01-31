import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: [],
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
});

export const carsReducer = carsSlice.reducer;
