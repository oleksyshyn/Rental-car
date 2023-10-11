import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { carsReducer } from './carsSlice';
import { filterReducer } from './filterSlice';
import { favoriteReducer } from './favoritesSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favorites'],
};

const persistedfavoriteReducer = persistReducer(persistConfig, favoriteReducer);

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    filter: filterReducer,
    favorites: persistedfavoriteReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);