import { configureStore } from "@reduxjs/toolkit";
import tileSlice from "../reducers/tileSlice";
import singleTileSlice from "../reducers/singleTileSlice";

const store = configureStore({
  reducer: {
    tiles: tileSlice.reducer,
    tile: singleTileSlice.reducer,
  },
});

export default store;
