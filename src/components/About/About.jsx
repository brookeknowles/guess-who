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
    const [questionCount, setQuestionCount] = useState(0);
    const [isGameReset, setIsGameReset] = useState(false); 

    const handleInstructionsClick = () => {
        setShowInstructions(true);
        setShowChat(false);
    };

    const handlePlayComputerClick = () => {
        setShowInstructions(false);
        setShowChat(true);
        setComputerCharacter(null);
        setSelectedCharacter(null);
        setGameResult(null);
        setQuestionCount(0);
        setIsGameReset(true);

        const event = new Event("resetCardFlip");
        document.dispatchEvent(event);

        const randomIndex = Math.floor(Math.random() * characters.length);
        const character = characters[randomIndex];
        setComputerCharacter(character);
        console.log("Computer Character:", character);
    };

    const resetChat = () => {
        setIsGameReset(false);
    };
    
    
    const handleGuessClick = () => {
        if (selectedCharacter && computerCharacter) {
            if (selectedCharacter === computerCharacter.name) {
                setGameResult("win");
            } else {
                setGameResult("lose");
            }
        }
    };

    const getFilteredCharacters = () => {
        if (selectedCharacter) {
            return characters.filter((character) =>
                character.name.toLowerCase().includes(selectedCharacter.toLowerCase())
            );
        } else {
            return characters;
        }
    };


    return (
        <div>
            <img
                className="guess-who-logo"
                src="Guess_Who_Logo.svg"
                alt="Guess Who Logo"
            />
            <div className="menu">
                <button onClick={handleInstructionsClick}>Instructions</button>
                {(!gameResult || gameResult === "win" || gameResult === "lose") && (
                    <button onClick={handlePlayComputerClick}>Play</button>
                )}

            </div>
            {showInstructions && (
                <div className="instructions">
                    <h2 className="instructions-heading">Instructions</h2>
                    <p className="instructions-paragraph">
                        Once you click play, the computer will randomly select a celebrity which you will have to guess.
                        A chat box will pop up where you can search for a yes/no question to ask the computer. As you
                        rule out characters who don't fit with the answers to the yes/no questions, you can turn them
                        over by clicking on their corresponding card in the game board to the left. Once you think you
                        have solved the mystery, select/search for the character from the drop down and click Guess.
                    </p>
                </div>
            )}
            {showChat && (
                <div className="game-container">
                    <Chat
                        computerCharacter={computerCharacter}
                        questionCount={questionCount}
                        setQuestionCount={setQuestionCount}
                        isGameReset={isGameReset}
                        resetChat={resetChat}
                    />
                    {!gameResult && (
                        <div className="dropdown-container">
                            <input
                                type="text"
                                list="characterOptions"
                                value={selectedCharacter}
                                onChange={(e) => setSelectedCharacter(e.target.value)}
                                placeholder="Search for a character..."
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
