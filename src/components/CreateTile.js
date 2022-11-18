import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTileAsync, fetchTiles } from "../reducers/tileSlice";

const CreateTile = () => {
  const [title, setTitle] = useState("");
  const [imageUrl, setUrl] = useState("");
  const [laserSpeed, setLaserSpeed] = useState(0);
  const [laserPower, setLaserPower] = useState(0);
  const [fileDescription, setFiledescription] = useState("");
  const [fileInstructions, setFileInstructions] = useState("");

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(
      addTileAsync({
        title,
        imageUrl,
        laserSpeed,
        laserPower,
        fileDescription,
        fileInstructions,
      })
    );
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
        <label>
          Laser Speed
          <input
            type="text"
            name="imgUrl"
            value={laserSpeed}
            onChange={(e) => setLaserSpeed(e.target.value)}
          />
        </label>

        <label>
          Laser Power
          <input
            type="text"
            name="imgUrl"
            value={laserPower}
            onChange={(e) => setLaserPower(e.target.value)}
          />
        </label>
        <label>
          File Description
          <input
            type="text"
            name="imgUrl"
            value={fileDescription}
            onChange={(e) => setFiledescription(e.target.value)}
          />
        </label>
        <label>
          Instructions
          <input
            type="text"
            name="imgUrl"
            value={fileInstructions}
            onChange={(e) => setFileInstructions(e.target.value)}
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
