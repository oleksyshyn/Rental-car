import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorite(state, action) {
      state.favorites.push(action.payload);
    },
    deleteFromFavorite(state, action) {
      state.favorites = state.favorites.filter(item => item !== action.payload);
    },
  },
});

export const { addToFavorite, deleteFromFavorite } = favoritesSlice.actions;

export const favoriteReducer = favoritesSlice.reducer;