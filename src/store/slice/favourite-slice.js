import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const favouriteSlice = createSlice({
  name: 'favourite',
  initialState,
  reducers: {
    addToFavourite(state, action) {
      console.log(action);
      state.push(action.payload);
    },
    removeFromFavourite(state, action) {
      return state.filter((items) => items.title !== action.payload.title);
    },
  },
});

export const { addToFavourite, removeFromFavourite } = favouriteSlice.actions;
export default favouriteSlice.reducer;
