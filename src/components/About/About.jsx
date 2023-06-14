import React, { useState } from "react";
import "./About.css";
import Chat from "../Chat/Chat";

import characters from "../../data/character_data";

function About() {
    const [showInstructions, setShowInstructions] = useState(false);
    const [showChat, setShowChat] = useState(false);
    const [computerCharacter, setComputerCharacter] = useState(null);
    const [selectedCharacter, setSelectedCharacter] = useState("");
    const [gameResult, setGameResult] = useState(null);

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

    const handleGuessClick = () => {
        if (selectedCharacter && computerCharacter) {
            if (selectedCharacter.id === computerCharacter.id) {
                setGameResult("win");
            } else {
                setGameResult("lose");
            }
        }
    };

    const getFilteredCharacters = () => {
        return characters.filter((character) =>
            character.name.toLowerCase().includes(selectedCharacter.toLowerCase())
        );
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
                {!gameResult && (
                    <button onClick={handlePlayComputerClick}>Play</button>
                )}
            </div>
            {showInstructions && (
                <div className="instructions">
                    <h2>Instructions</h2>
                    <p>Simple instructions on how to play the game.</p>
                </div>
            )}
            {showChat && (
                <div className="game-container">
                    <Chat computerCharacter={computerCharacter} />
                    {!gameResult && (
                        <div className="dropdown-container">
                            <input
                                type="text"
                                list="characterOptions"
                                value={selectedCharacter}
                                placeholder="Search for a character..."
                                onChange={(e) => setSelectedCharacter(e.target.value)}
                            />
                            <datalist id="characterOptions">
                                {getFilteredCharacters().map((character, index) => (
                                    <option key={index} value={character.name} />
                                ))}
                            </datalist>
                            <button onClick={handleGuessClick}>Guess</button>
                        </div>
                    )}
                    {gameResult === "win" && (
                        <p className="result">Congratulations! You win!</p>
                    )}
                    {gameResult === "lose" && (
                        <p className="result">
                            Sorry, you lose! The character was {computerCharacter.name}
                        </p>
                    )}
                </div>
            )}
        </div>
    );
}

export default About;
