import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../lib/axiosInstance";

export const getAllCars = createAsyncThunk(
  "cars/getAll",
  async (credentials, thunkAPI) => {
    try {
      const response = await axiosInstance.get("/adverts");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
