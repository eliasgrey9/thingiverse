import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectTiles,
  fetchTiles,
  updateSingleTile,
} from "../reducers/tileSlice";
import { Link } from "react-router-dom";
//import all neccesary thunks!

const Tiles = () => {
  const tiles = useSelector(selectTiles);
  const dispatch = useDispatch();

  // ** Loads thunk after page loads once, input your thunk! **/
  useEffect(() => {
    dispatch(fetchTiles());
  }, []);

  function handleSubmit(tile) {
    console.log("tile", tile);
    const updatedTile = { ...tile };
    updatedTile.likes += 1;
    dispatch(updateSingleTile(updatedTile));
  }

  return (
    <>
      <div className="tiles">
        <h2>All Tiles</h2>
      </div>
      <div className="tiles">
        {tiles.map((tile) => (
          <div key={tile.id} className="tile">
            <Link to={`/tiles/${tile.id}`}>
              <h4>{tile.title}</h4>
              <img className="all-tiles-img" src={tile.imageUrl} />
            </Link>

            <div className="collectLikeShareBox">
              <div className="collectBox">
                <Link to={`/tiles/${tile.id}`}>
                  <div className="collect">Collect +</div>
                </Link>
              </div>
              <div className="likeShareBox">
                <a>
                  <div onClick={(e) => handleSubmit(tile)} className="like">
                    Like{tile.likes}
                  </div>
                </a>

                <Link to={`/tiles`}>
                  <div className="share">Share</div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Tiles;
