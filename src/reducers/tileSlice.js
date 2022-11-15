import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { tiles: [] };

// Thunk
export const fetchTiles = createAsyncThunk("fetchTiles", async () => {
  try {
    const { data } = await axios.get("/api/tiles");
    return data;
  } catch (error) {
    console.log("Couldn't fetch Tiles!", err);
  }
});

export const addTileAsync = createAsyncThunk(
  "tiles/addTile",
  async (payload) => {
    try {
      const { data } = await axios.post("/api/tiles", payload);
      console.log("data", data);
      return data;
    } catch (error) {
      console.log("Couldn't add tile!", error);
    }
  }
);

const tileSlice = createSlice({
  name: "tiles",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchTiles.fulfilled, (state, action) => {
      return { tiles: action.payload };
    });

    builder.addCase(addTileAsync.fulfilled, (state, action) => {
      console.log(action.payload);
      state.tiles.push(action.payload);
    });

    // builder.addCase(deleteCampusAsync.fulfilled, (state, action) => {
    //   return state.campuses.campuses;
    // });
  },
});

export const selectTiles = (state) => {
  return state.tiles.tiles;
};
export default tileSlice;
