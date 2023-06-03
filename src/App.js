import React from "react";
import GameBoard from "./components/GameBoard/GameBoard";
import About from "./components/About/About";
import "./App.css";

function App() {
  return (
    <div>
      <div className="gameboard_container">
        <GameBoard />
      </div>
      <div className="about_container"> {/* TODO maybe change so its Left/Right containers instead*/}
        <About />
      </div>
    </div>
  );
}

export default App;
