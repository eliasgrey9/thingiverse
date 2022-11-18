import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

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

export const updateSingleTile = createAsyncThunk(
  "updateSingleTile",

  async (tile) => {
    try {
      const { data } = await axios.put(`/api/tiles/${tile.id}`, tile);
      return data;
    } catch (error) {
      console.log("Couldn't fetch Single tile!", err);
    }
  }
);
const tileSlice = createSlice({
  name: "tiles",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchTiles.fulfilled, (state, action) => {
      return action.payload;
    });

    builder.addCase(addTileAsync.fulfilled, (state, action) => {
      state.push(action.payload);
    });
    builder.addCase(updateSingleTile.fulfilled, (state, action) => {
      console.log(action.payload);
      const index = state.findIndex((tile) => tile.id === action.payload.id);
      state[index] = action.payload;
    });

    // builder.addCase(deleteCampusAsync.fulfilled, (state, action) => {
    //   return state.campuses.campuses;
    // });
  },
});

export const selectTiles = (state) => {
  return state.tiles;
};
export default tileSlice;
