import React from "react";
import Grid from "@mui/material/Grid";
import CharacterCard from "../CharacterCard/CharacterCard";
import character_data from "../../data/character_data";
import "./GameBoard.css";

function GameBoard() {
  const characters = character_data;

  return (
    <Grid container spacing={2} className="game-board">
      {characters.map((character) => (
        <Grid item key={character.id} className="game-board__card">
          <CharacterCard character={character} />
        </Grid>
      ))}
    </Grid>
  );
}

export default GameBoard;
