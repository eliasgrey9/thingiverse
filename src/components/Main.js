import React from "react";
import { NavLink } from "react-router-dom";
import { Tiles } from "./index";
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
        </Routes>
      </main>
      <div className="footer"></div>
    </div>
  );
};

export default Main;
