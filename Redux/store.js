import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./FavoriteSlice.js";

const store = configureStore({
  reducer: {
    favorite: favoriteReducer,
  },
});

export default store;