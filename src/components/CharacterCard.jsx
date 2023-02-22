import React from "react";

function CharacterCard(props) {
    return (
        <div className="w-1/6 p-2">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={props.character.image} alt={props.character.name} className="h-auto w-auto object-cover" />
        </div>
        </div>
    );
}

export default CharacterCard;
