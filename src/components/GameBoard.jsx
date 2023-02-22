import React from "react";
import Grid from "@mui/material/Grid";
import CharacterCard from "./CharacterCard";
import character_data from "../data/character_data";

function GameBoard() {
  const characters = character_data;

  return (
    <Grid container spacing={4}>
      {characters.map((character) => (
        <Grid item xs={3} md={3} key={character.id} style={{ maxWidth: "160px" }}>
          <CharacterCard character={character} />
        </Grid>
      ))}
    </Grid>
  );
}

export default GameBoard;
