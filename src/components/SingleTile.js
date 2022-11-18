import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleTile, selectSingleTile } from "../reducers/singleTileSlice";

const SingleTile = () => {
  const { tileId } = useParams();
  const dispatch = useDispatch();

  const tile = useSelector(selectSingleTile);

  useEffect(() => {
    dispatch(fetchSingleTile(tileId));
  }, []);

  return (
    <>
      {
        <div className="singleTileBody">
          <div class="singleTile" key={tile.id}>
            <h2> {tile.title}</h2>
            <img className="single-tile-img" src={tile.imageUrl} />
            <h4>Laser Settings</h4>
            <p>Speed: {tile.laserSpeed}mm/s</p>
            <p>Power: {tile.laserPower}%</p>
            <p>Description: {tile.fileDescription}</p>
            <p>Instructions: {tile.fileInstructions}</p>
            <button>Download file</button>
          </div>
        </div>
      }
    </>
  );
};
export default SingleTile;
