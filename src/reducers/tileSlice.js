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

// export const addCampusAsync = createAsyncThunk(
//   "campuses/addCampus",
//   async (payload) => {
//     try {
//       const { data } = await axios.post("/api/campuses", payload);
//       return data;
//     } catch (error) {
//       console.log("Couldn't add Campus!", error);
//     }
//   }
// );
// export const deleteCampusAsync = createAsyncThunk(
//   "campuses/deleteCampus",
//   async (id) => {
//     console.log("PAYLOAD", id);
//     try {
//       const { data } = await axios.delete(`/api/campuses/${id}`);

//       return data;
//     } catch (error) {
//       console.log("Couldn't delete Campus!", error);
//     }
//   }
// );

const tileSlice = createSlice({
  name: "tiles",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchTiles.fulfilled, (state, action) => {
      return { tiles: action.payload };
    });

    // builder.addCase(addCampusAsync.fulfilled, (state, action) => {
    //   state.campuses.push(action.payload);
    // });

    // builder.addCase(deleteCampusAsync.fulfilled, (state, action) => {
    //   return state.campuses.campuses;
    // });
  },
});

export const selectTiles = (state) => {
  return state.tiles.tiles;
};
export default tileSlice;
