import React from "react";
import Grid from "@mui/material/Grid";
import CharacterCard from "./CharacterCard";
import character_data from "../data/character_data";

function GameBoard() {
  const characters = character_data;

  return (
    <Grid container spacing={2}>
      {characters.map((character) => (
        // <Grid item key={character.id} xs={6} sm={4} md={3}>
        <Grid item xs={3} sx={{ width: "100%", height: "100%" }}>
          <CharacterCard character={character} />
        </Grid>
      ))}
    </Grid>
  );
}

export default GameBoard;
