import React from "react";
import CharacterRow from "./CharacterRow";
import character_data from "../data/character_data";

function GameBoard() {
    const characters = character_data
    const rows = [];
  
    for (let i = 0; i < characters.length; i += 6) {
      const row = characters.slice(i, i + 6);
      rows.push(row);
    }
  
    return (
      <div className="container mx-auto">
        {rows.map((row, index) => (
          <CharacterRow key={index} characters={row} />
        ))}
      </div>
    );
}

export default GameBoard;  