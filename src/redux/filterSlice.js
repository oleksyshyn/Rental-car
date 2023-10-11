import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  brand: '',
  price: '',
  mileageFrom: '',
  mileageTo: '',
  isFiltered: false,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter(state, action) {   
      state.brand = action.payload.brand;
      state.price = action.payload.price;
      state.mileageFrom = action.payload.mileageFrom || '';
      state.mileageTo = action.payload.mileageTo || '';
      state.isFiltered = true;
    },
  },
});

export const setFilter = filterSlice.actions.setFilter;

export const filterReducer = filterSlice.reducer;