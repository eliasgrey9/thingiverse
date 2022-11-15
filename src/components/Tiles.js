import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTiles, fetchTiles } from "../reducers/tileSlice";
// import { addToCart } from "../reducers/cartSlice";
// import { cartSelect } from "../reducers/cartSlice";
import { Link } from "react-router-dom";
//import all neccesary thunks!

const Tiles = () => {
  const tiles = useSelector(selectTiles);
  //   const cart = useSelector(cartSelect);

  const dispatch = useDispatch();

  // ** Loads thunk after page loads once, input your thunk! **/
  useEffect(() => {
    dispatch(fetchTiles());
  }, []);

  return (
    <>
      <div className="tiles">
        <h2>All Tiles</h2>
      </div>
      <div className="tiles">
        {tiles.map((tile) => (
          <div key={tile.id} className="tile">
            <h4>{tile.title}</h4>
            <img className="all-tiles-img" src={tile.imageUrl} />
            <Link to={`/tiles/${tile.id}`}>
              <button>Details</button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Tiles;
