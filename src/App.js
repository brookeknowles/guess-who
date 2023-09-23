import React from "react";
import GameBoard from "./components/GameBoard/GameBoard";
import About from "./components/About/About";
import "./App.css";

function App() {
  return (
    <div className="app_container">
      <div className="gameboard_container">
        <GameBoard />
      </div>
      <div className="about_container">
        <About />
      </div>
    </div>
  );
}

export default App;
