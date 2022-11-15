import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk
export const fetchSingleTile = createAsyncThunk(
  "fetchSingleTile",

  async (tileId) => {
    try {
      const { data } = await axios.get(`/api/tiles/${tileId}`);
      return data;
    } catch (error) {
      console.log("Couldn't fetch Single tile!", err);
    }
  }
);

const initialState = { tile: {} };
const singleTileSlice = createSlice({
  name: "tile",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchSingleTile.fulfilled, (state, action) => {
      return { tile: action.payload };
    });
  },
});

export const selectSingleTile = (state, action) => {
  return state.tile.tile;
};

export default singleTileSlice;
