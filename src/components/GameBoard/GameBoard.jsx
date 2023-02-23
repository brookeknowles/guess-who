import React from "react";
import Grid from "@mui/material/Grid";
import "./GameBoard.css";
import CharacterCard from "../CharacterCard/CharacterCard";
import character_data from "../../data/character_data";

function GameBoard() {
  const characters = character_data;

  return (
    <Grid container spacing={1} className="game-board">
      {characters.map((character) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={character.id}>
          <CharacterCard character={character} />
        </Grid>
      ))}
    </Grid>
  );
}

export default GameBoard;
