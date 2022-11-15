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
        <div key={tile.id} className="tile">
          <h2>Title: {tile.title}</h2>
          <img src={tile.imageUrl} />
        </div>
      }
    </>
  );
};
export default SingleTile;
