import React, { useState, useEffect } from "react";
import "./CharacterCard.css";

function CharacterCard(props) {
    const [isFlipped, setIsFlipped] = useState(false);

    useEffect(() => {
        const resetCardFlip = () => {
            setIsFlipped(false);
        };

        document.addEventListener("resetCardFlip", resetCardFlip);
        return () => {
            document.removeEventListener("resetCardFlip", resetCardFlip);
        };
    }, []);

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
