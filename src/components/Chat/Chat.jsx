import React, { useState } from "react";
import computerAnswers from "../../data/computer_answers";
import "./Chat.css";

function Chat() {
    const [chatMessages, setChatMessages] = useState([]);
    const [selectedQuestion, setSelectedQuestion] = useState("");

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
        const answer = computerAnswers[question] || "I don't know.";
        return answer;
    };

    return (
        <div className="chat-container">
            <div className="chat-messages">
                {chatMessages.map((message, index) => (
                    <div key={index} className="chat-message">
                        <div className="question">{message.question}</div>
                        <div className="answer">{message.answer}</div>
                    </div>
                ))}
            </div>
            <div className="chat-input">
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
    );
}

export default Chat;
