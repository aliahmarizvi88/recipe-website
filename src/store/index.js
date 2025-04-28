import { configureStore } from '@reduxjs/toolkit';
import favouriteReducer from './slice/favourite-slice';

const store = configureStore({
  reducer: {
    favourite: favouriteReducer,
  },
});

export default store;
