// src/components/GamePage.jsx
import React, { useState } from 'react';
import { gameQuestions } from '../assets/gameData';
import { motion, AnimatePresence } from 'framer-motion';
import GameReportPage from './GameReportPage';

function GamePage() {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [selectedOption, setSelectedOption] = useState(null);
	const [showOutcome, setShowOutcome] = useState(false);
	const [gameOver, setGameOver] = useState(false);
	const [conveniencePoints, setConveniencePoints] = useState(0);
	const [userAnswers, setUserAnswers] = useState([]);

	const currentQuestion = gameQuestions[currentQuestionIndex];

	// --- Event Handlers ---
	const handleOptionSelect = (option) => {
		if (showOutcome) return;

		setSelectedOption(option);
		setShowOutcome(true);

		// Update convenience points
		setConveniencePoints(prevPoints => prevPoints + option.conveniencePoints);

		// --- Store the selected answer ---
		setUserAnswers(prevAnswers => [
			...prevAnswers,
			{
				questionIndex: currentQuestionIndex, // Store index to match with gameQuestions
				selectedOptionId: option.id, // Store the ID of the selected option
                selectedOptionText: option.text, // Store text for easy display
                leaks: option.leaks || [] // Store leaks from this choice
			}
		]);
	};

	const handleNextQuestion = () => {
		const nextIndex = currentQuestionIndex + 1;
		if (nextIndex < gameQuestions.length) {
			setSelectedOption(null); // Clear previous selection instantly
			setShowOutcome(false);   // Hide outcome instantly
			setCurrentQuestionIndex(nextIndex); // Move to next question without delay
		} else {
			setGameOver(true);
		}
	};

	const handleRestart = () => {
        // Reset all state to initial values
        setCurrentQuestionIndex(0);
        setSelectedOption(null);
        setShowOutcome(false);
        setGameOver(false);
        setConveniencePoints(0);
        setUserAnswers([]);
        // Or uncomment below for a full page reload if preferred
        // window.location.reload();
    };

	if (gameOver) {
		// Render the detailed report page instead of the simple game over message
		return (
			<GameReportPage
				gameQuestions={gameQuestions}
				userAnswers={userAnswers}
				totalConveniencePoints={conveniencePoints}
				onRestart={handleRestart} // Pass the restart handler
			/>
		);
	}

	if (!currentQuestion) {
		return <div className="text-center p-8">Loading question...</div>;
	}

	return (
		<div className="m-8 p-8 rounded-lg max-w-4xl mx-auto bg-gray-50 min-h-screen w-full text-center">
			<AnimatePresence mode="wait">
				<motion.div
					key={currentQuestionIndex}
					initial={{ x: 300, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					exit={{ x: -300, opacity: 0 }}
					transition={{ duration: 0.25 }}
				>
					<h2 className="text-xl font-semibold mb-4 text-gray-700">
						Question {currentQuestionIndex + 1} / {gameQuestions.length}
					</h2>
					<p className="mb-4 text-gray-700">Total Convenience Points: <strong>{conveniencePoints}</strong></p>

					{currentQuestion.image && (
						<img
							src={currentQuestion.image}
							alt="image"
							className="max-w-full h-auto max-h-72 object-contain mb-6 rounded border mx-auto"
						/>
					)}
					<p className="text-lg font-medium mb-4 text-gray-800">{currentQuestion.question}</p>

					{!showOutcome && (
						<div className="flex flex-col gap-3">
							{currentQuestion.options.map((option) => (
									<button
									key={option.id}
									onClick={() => handleOptionSelect(option)}
									className="w-full px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-150 disabled:border-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed relative" // Added relative positioning
									disabled={showOutcome}
								>
									<span className="block text-center">{option.text}</span>
									<span className="text-green-400 absolute top-1/2 transform -translate-y-1/2 right-2"> +{option.conveniencePoints}</span>
								</button>
							))}
						</div>
					)}

					{showOutcome && selectedOption && (
						<div className="mt-6 p-4 bg-gray-100 border border-gray-300 rounded">
							<p className="text-base italic mb-4 text-gray-700">{selectedOption.outcome}</p>
							<button
								onClick={handleNextQuestion}
								className="mt-4 px-5 py-2 bg-green-600 text-white rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-150"
							>
								{currentQuestionIndex < gameQuestions.length - 1 ? 'Next Question' : 'See Report'}
							</button>
						</div>
					)}
				</motion.div>
			</AnimatePresence>
		</div>
	);
}

export default GamePage;
