import React, { useState } from "react";
import "./About.css";
import Chat from "../Chat/Chat";

import characters from "../../data/character_data";

function About() {
    const [showInstructions, setShowInstructions] = useState(false);
    const [showChat, setShowChat] = useState(false);
    const [computerCharacter, setComputerCharacter] = useState(null);

    const handleInstructionsClick = () => {
        setShowInstructions(true);
        setShowChat(false);
    };

    const handlePlayComputerClick = () => {
        setShowInstructions(false);
        setShowChat(true);
        const randomIndex = Math.floor(Math.random() * characters.length);
        const character = characters[randomIndex];
        setComputerCharacter(character);
        console.log("Computer Character:", character);
    };

    const handlePlayFriendClick = () => {
        setShowInstructions(false);
        setShowChat(false);
    };

    return (
        <div>
            <img
                className="guess-who-logo"
                src="/Guess_Who_Logo.svg"
                alt="Guess Who Logo"
            />
            <div className="menu">
                <button onClick={handleInstructionsClick}>Instructions</button>
                <button onClick={handlePlayComputerClick}>Play against computer</button>
                <button onClick={handlePlayFriendClick}>Play against a friend</button>
            </div>
            {showInstructions && (
                <div className="instructions">
                    <h2>Instructions</h2>
                    <p>Simple instructions on how to play the game.</p>
                </div>
            )}
            {showChat && <Chat computerCharacter={computerCharacter} />}
        </div>
    );
}

export default About;
