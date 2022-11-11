import { configureStore } from "@reduxjs/toolkit";
import tileSlice from "../reducers/tileSlice";

const store = configureStore({
  reducer: {
    tiles: tileSlice.reducer,
  },
});

export default store;
