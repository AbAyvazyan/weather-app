import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = { data: null, loading: false, error: '' };

export const getWeather = createAsyncThunk(
  "async/getWeather",
  async (city:string, thunkAPI) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API}/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
      );

      const data = await response.json();
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWeather.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload
      })
      .addCase(getWeather.pending, (state) => {
        state.loading = true;
      })
      .addCase(getWeather.rejected, (state) => {
        state.loading = false;
        state.error = "error";
        console.error("Failed to fetch weather:");
      });
  },
});

export default weatherSlice.reducer;
