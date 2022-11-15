import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTileAsync, fetchTiles } from "../reducers/tileSlice";

const CreateTile = () => {
  const [title, setTitle] = useState("");
  const [imageUrl, setUrl] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addTileAsync({ title, imageUrl }));
    dispatch(fetchTiles());
  }

  return (
    <>
      <h2>Create your thing!</h2>
      <form
        className="create-tile-form"
        id="create-tile-form"
        onSubmit={handleSubmit}
      >
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Image Url:
          <input
            type="text"
            name="imgUrl"
            value={imageUrl}
            onChange={(e) => setUrl(e.target.value)}
          />
        </label>
        <button type="submit" value="Submit">
          Create Now
        </button>
      </form>
    </>
  );
};
export default CreateTile;
