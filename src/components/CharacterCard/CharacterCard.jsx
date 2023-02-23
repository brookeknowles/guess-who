import React from "react";
import "./CharacterCard.css";

function CharacterCard(props) {
  return (
    <div className="character-card">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={props.character.image}
          alt={props.character.name}
          className="h-auto w-auto object-cover"
          style={{ maxHeight: "12rem" }}
        />
      </div>
    </div>
  );
}

export default CharacterCard;
