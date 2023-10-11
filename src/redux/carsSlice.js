import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  extraReducers: {
    [fetchCars.pending](state) {
      state.isLoading = true;
    },
    [fetchCars.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchCars.rejected](state, action) {
      state.isLoading = false;
      state.items = [];
      state.error = action.payload;
    },
  },
});

export const carsReducer = carsSlice.reducer;
