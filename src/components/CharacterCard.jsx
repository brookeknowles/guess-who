import React from "react";

function CharacterCard(props) {
    return (
        <div className="w-1/6 p-2">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={props.character.image} alt={props.character.name} className="h-40 w-full object-cover" />
            <div className="p-4">
            <p className="text-lg font-bold mb-2">{props.character.name}</p>
            </div>
        </div>
        </div>
    );
}

export default CharacterCard;
