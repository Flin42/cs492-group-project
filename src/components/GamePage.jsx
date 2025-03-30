// src/components/GamePage.jsx
import React, { useState } from 'react';
import { gameQuestions } from '../assets/gameData';

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

  if (gameOver) {
    return (
      // Example using Tailwind classes
      <div className="max-w-lg mx-auto my-8 p-6 border border-gray-300 rounded-lg text-center bg-white shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Game Over!</h2>
        <p className="mb-6 text-gray-600">You've completed the adventure.</p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200"
        >
          Play Again?
        </button>
      </div>
    );
  }

  if (!currentQuestion) {
     return <div className="text-center p-8">Loading question...</div>;
  }

  return (
    // Apply Tailwind classes - more examples
    <div className="max-w-xl mx-auto my-8 p-6 md:p-8 border border-red-400 rounded-lg text-center bg-gray-50 shadow-lg">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">
        Question {currentQuestionIndex + 1} / {gameQuestions.length}
      </h2>
      <p className="text-lg font-medium mb-4 text-gray-800">{currentQuestion.question}</p>

      {currentQuestion.image && ( // Conditionally render image if it exists
           <img
                src={currentQuestion.image}
                alt={currentQuestion.question}
                // Tailwind classes for images
                className="max-w-full h-auto max-h-72 object-contain mb-6 rounded border bg-blue-500 mx-auto"
           />
      )}


      {!showOutcome && (
        // Tailwind classes for flex column layout and gap
        <div className="flex flex-col gap-3">
          {currentQuestion.options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleOptionSelect(option)}
              // Tailwind classes for buttons
              className="w-full px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-150 disabled:border-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed"
              disabled={showOutcome} // Keep disabled logic
            >
              {option.text}
            </button>
          ))}
        </div>
      )}

      {showOutcome && selectedOption && (
        // Tailwind classes for outcome section
        <div className="mt-6 p-4 bg-gray-100 border border-gray-300 rounded">
          <p className="text-base italic mb-4 text-gray-700">{selectedOption.outcome}</p>
          <button
             onClick={handleNextQuestion}
             // Tailwind classes for next button
             className="px-5 py-2 bg-green-600 text-white rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-150"
          >
            Next Question
          </button>
        </div>
      )}
    </div>
  );
}

export default GamePage;