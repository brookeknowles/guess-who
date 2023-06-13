import React, { useState, useEffect, useRef } from "react";
import computerAnswers from "../../data/computer_answers";
import "./Chat.css";

function Chat({ computerCharacter }) {
    const [chatMessages, setChatMessages] = useState([]);
    const [selectedQuestion, setSelectedQuestion] = useState("");
    const chatContainerRef = useRef(null);

    useEffect(() => {
        scrollToBottom();
    }, [chatMessages]);

    const handleQuestionChange = (event) => {
        setSelectedQuestion(event.target.value);
    };

    const handleAskClick = () => {
        if (selectedQuestion) {
            const answer = getComputerAnswer(selectedQuestion);
            const newChatMessage = { question: selectedQuestion, answer };
            setChatMessages([...chatMessages, newChatMessage]);
        }
    };

    const getComputerAnswer = (question) => {
        if (selectedQuestion && computerCharacter) {
            const answerList = computerAnswers[question];
            if (answerList) {
                const characterName = computerCharacter.name;
                if (answerList.yes.includes(characterName)) {
                    return "Yes";
                } else if (answerList.no.includes(characterName)) {
                    return "No";
                }
            }
        }
        return "I don't know.";
    };

    const scrollToBottom = () => {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    };

    return (
        <div className="chat-container">
            <div className="chat-messages" ref={chatContainerRef}>
                {chatMessages.map((message, index) => (
                    <div key={index} className="chat-message">
                        <div className="question">{message.question}</div>
                        <div className="answer">{message.answer}</div>
                    </div>
                ))}
            </div>
            <div className="chat-input">
                <div className="dropdown-container">
                    <select value={selectedQuestion} onChange={handleQuestionChange}>
                        <option value="">Select a question...</option>
                        {Object.keys(computerAnswers).map((question, index) => (
                            <option key={index} value={question}>
                                {question}
                            </option>
                        ))}
                    </select>
                    <button onClick={handleAskClick}>Ask</button>
                </div>
            </div>
        </div>
    );
}

export default Chat;
