import { createSlice } from "@reduxjs/toolkit";

import { getAllCars } from "./carsOperations";

const initialState = {
  isLoading: false,
  error: null,
  cars: [],
  count: 0,
  page: 1,
  favorites: [],
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const isFavorite = state.favorites.find(
        (favorite) => favorite.id === action.payload.id
      );

      if (!isFavorite) {
        state.favorites.push(action.payload);
      } else {
        state.favorites = state.favorites.filter(
          (favorite) => favorite.id !== action.payload.id
        );
      }
    },
    clearAdverts: (state) => {
      state.cars = [];
    },
    clearPage: (state) => {
      state.page = 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllCars.pending, (state) => {
      // state.isLoading = true;
      state.error = null;
      state.count = 0;
      // state.cars = [];
    });
    builder.addCase(getAllCars.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.count = action.payload.count;
      state.cars = [...state.cars, ...action.payload.adverts];
      state.page += 1;
    });
    builder.addCase(getAllCars.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.count = 0;
      state.cars = [];
    });
  },
});

export const { toggleFavorite, clearAdverts, clearPage } = carsSlice.actions;

export const carsReducer = carsSlice.reducer;
