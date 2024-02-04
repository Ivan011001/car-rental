import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "@/lib/axiosInstance";

export const getAllCars = createAsyncThunk(
  "cars/getAll",
  async (credentials, thunkAPI) => {
    try {
      const {
        page = 1,
        brand = "",
        maxPrice = "",
        minMileage = "",
        maxMileage = "",
      } = credentials;

      const response = await axiosInstance.get(
        `/adverts?page=${page}&limit=12&make=${brand}`
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
