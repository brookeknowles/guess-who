import React, { useState } from "react";
import "./CharacterCard.css";

function CharacterCard(props) {
    const [isFlipped, setIsFlipped] = useState(false);

    // Flip over the card when user clicks on it
    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="character-card" onClick={handleClick}>
            <div>
                <img
                    src={isFlipped ? "/blank_cards/red_blank.png" : props.character.image}
                    alt={props.character.name}
                    style={{ maxHeight: "8rem" }}
                />
            </div>
        </div>
    );
}

export default CharacterCard;
