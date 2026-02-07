import React from "react";
import Home from "../pages";
import NavBar from "../pages/NavBar";
import CursorFollower from "../components/CursorFollower";

export default function App() {
  return (
    <div>
      <CursorFollower />
      <Home />
      <NavBar />
    </div>
  );
}
