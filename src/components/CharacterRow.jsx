import React from "react";
import CharacterCard from "./CharacterCard";

function CharacterRow(props) {
    return (
      <div className="flex justify-center">
        {props.characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    );
}
  
export default CharacterRow;