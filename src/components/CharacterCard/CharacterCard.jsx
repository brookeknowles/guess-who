import React from "react";
import "./CharacterCard.css";

function CharacterCard(props) {
  return (
    <div className="character-card">
      <div>
        <img
          src={props.character.image}
          alt={props.character.name}
          style={{ maxHeight: "8rem" }}
        />
      </div>
    </div>
  );
}

export default CharacterCard;
