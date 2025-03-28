import React, { useState } from 'react';
import { gameQuestions } from '../assets/gameData'; // Import the questions
import './GamePage.css'; // We'll create this for basic styling

function GamePage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null); // Store the selected option object
  const [showOutcome, setShowOutcome] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const currentQuestion = gameQuestions[currentQuestionIndex];

  // --- Event Handlers ---

  const handleOptionSelect = (option) => {
    if (showOutcome) return; // Don't allow selecting if outcome is already shown

    setSelectedOption(option);
    setShowOutcome(true);
  };

  const handleNextQuestion = () => {
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < gameQuestions.length) {
      setCurrentQuestionIndex(nextIndex);
      setSelectedOption(null); // Reset selection
      setShowOutcome(false);   // Hide outcome for the new question
    } else {
      // End of the game
      setGameOver(true);
    }
  };

  // --- Render Logic ---

  if (gameOver) {
    return (
      <div className="game-container">
        <h2>Game Over!</h2>
        <p>You've completed the adventure.</p>
        {/* Optionally add a restart button here */}
        <button onClick={() => window.location.reload()}>Play Again?</button>
      </div>
    );
  }

  // Ensure currentQuestion exists before trying to render
  if (!currentQuestion) {
     return <div className="game-container">Loading question...</div>; // Or some error state
  }

  return (
    <div className="game-container">
      <h2>Question {currentQuestionIndex + 1} / {gameQuestions.length}</h2>
      <p className="question-text">{currentQuestion.question}</p>

      <img
        src={currentQuestion.image}
        alt={currentQuestion.question} // Good practice for accessibility
        className="question-image"
      />

      {!showOutcome && (
        <div className="options-container">
          {currentQuestion.options.map((option) => (
            <button
              key={option.id} // Important for React lists
              onClick={() => handleOptionSelect(option)}
              className="option-button"
            >
              {option.text}
            </button>
          ))}
        </div>
      )}

      {showOutcome && selectedOption && (
        <div className="outcome-container">
          <p className="outcome-text">{selectedOption.outcome}</p>
          <button onClick={handleNextQuestion} className="next-button">
            Next Question
          </button>
        </div>
      )}
    </div>
  );
}

export default GamePage;