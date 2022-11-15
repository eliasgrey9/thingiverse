import React from "react";
import { NavLink } from "react-router-dom";
import { Tiles, CreateTile, SingleTile } from "./index";
import { Route, Routes } from "react-router-dom";

const Main = () => {
  return (
    <div className="bodyClass">
      <nav className="main-navbar">
        <div className="logo">MyThingiVerse</div>
        <div>
          <NavLink className={"navLinks"} to="/explore">
            Explore
          </NavLink>
          <NavLink className={"navLinks"} to="/create">
            Create +
          </NavLink>
        </div>
      </nav>
      <main>
        <h1 className="main-header"></h1>
        <Routes>
          <Route
            path="/tiles"
            element={
              <>
                <Tiles />
              </>
            }
          />
          <Route
            path="/create"
            element={
              <>
                <CreateTile />
              </>
            }
          />
          <Route
            path="/tiles/:tileId"
            element={
              <>
                <SingleTile />
              </>
            }
          />
        </Routes>
      </main>
      <div className="footer"></div>
    </div>
  );
};

export default Main;
