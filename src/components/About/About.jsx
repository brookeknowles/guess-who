import React, { useState } from "react";
import "./About.css";
import Chat from "../Chat/Chat";

import characters from "../../data/character_data";

function About() {
    const [showInstructions, setShowInstructions] = useState(false);
    const [showChat, setShowChat] = useState(false);
    const [computerCharacter, setComputerCharacter] = useState(null);
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const [gameResult, setGameResult] = useState(null);
    const [questionCount, setQuestionCount] = useState(0); // Add questionCount state

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

    const handleCharacterSelect = (event) => {
        const selectedId = parseInt(event.target.value);
        const character = characters.find((char) => char.id === selectedId);
        setSelectedCharacter(character);
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
                    <Chat
                        computerCharacter={computerCharacter}
                        questionCount={questionCount} // Pass questionCount as a prop
                        setQuestionCount={setQuestionCount} // Pass setQuestionCount as a prop
                    />
                    {!gameResult && (
                        <div className="dropdown-container">
                            <select
                                value={selectedCharacter && selectedCharacter.id}
                                onChange={handleCharacterSelect}
                            >
                                <option value="">Select a character</option>
                                {characters.map((character) => (
                                    <option key={character.id} value={character.id}>
                                        {character.name}
                                    </option>
                                ))}
                            </select>
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
