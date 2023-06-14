import React, { useState, useEffect, useRef } from "react";
import computerAnswers from "../../data/computer_answers";
import "./Chat.css";

function Chat({ computerCharacter, questionCount, setQuestionCount }) {
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
            setQuestionCount((prevCount) => prevCount + 1); // Increment the question count
        }
    };

    const getFilteredQuestions = () => {
        return Object.keys(computerAnswers).filter((question) =>
            question.toLowerCase().includes(selectedQuestion.toLowerCase())
        );
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
            <div className="question-count">Question Count: {questionCount}</div> {/* Display question count */}
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
                    <input
                        type="text"
                        list="questionOptions"
                        value={selectedQuestion}
                        onChange={handleQuestionChange}
                        placeholder="Search for a question..."
                    />
                    <datalist id="questionOptions">
                        {getFilteredQuestions().map((question, index) => (
                            <option key={index} value={question} />
                        ))}
                    </datalist>
                    <button onClick={handleAskClick}>Ask</button>
                </div>
            </div>
        </div>
    );
}

export default Chat;
