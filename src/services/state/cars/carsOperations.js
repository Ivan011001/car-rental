import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllCars = createAsyncThunk(
  "cars/getAll",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.get(
        "https://65ba58e0b4d53c066552aeaf.mockapi.io/api/adverts"
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
