import React from "react";
import CharacterCard from "./CharacterCard";

function CharacterRow(props) {
  const { characters } = props;

  return (
    <div className="flex flex-wrap justify-center">
      {characters.map((character, index) => (
        <div key={character.id} className={`p-2 ${index > 0 ? 'ml-2' : ''}`}>
          <CharacterCard character={character} />
        </div>
      ))}
    </div>
  );
}

export default CharacterRow;
