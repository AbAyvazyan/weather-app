import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = { data: null, loading: false, error: '' };

export const getForcast = createAsyncThunk(
  "async/getForcast",
  async (_, thunkAPI) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API}/forecast?q=Yerevan&cnt=5&appid=${process.env.REACT_APP_API_KEY}`
      );

      const data = await response.json();
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const forcastSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getForcast.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload
      })
      .addCase(getForcast.pending, (state) => {
        state.loading = true;
      })
      .addCase(getForcast.rejected, (state) => {
        state.loading = false;
        state.error = "error";
        console.error("Failed to fetch weather:");
      });
  },
});

export default forcastSlice.reducer;
