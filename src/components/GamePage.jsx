// src/components/GamePage.jsx
import React, { useState } from 'react';
import { gameQuestions } from '../assets/gameData';
import { motion, AnimatePresence } from 'framer-motion';

function GamePage() {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [selectedOption, setSelectedOption] = useState(null);
	const [showOutcome, setShowOutcome] = useState(false);
	const [gameOver, setGameOver] = useState(false);
	const [conveniencePoints, setConveniencePoints] = useState(0);

	const currentQuestion = gameQuestions[currentQuestionIndex];

	// --- Event Handlers ---
	const handleOptionSelect = (option) => {
		if (showOutcome) return;

		setSelectedOption(option);
		setShowOutcome(true);

		// Update convenience points
		setConveniencePoints(prevPoints => prevPoints + option.conveniencePoints);
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

	if (gameOver) {
		return (
			<div className="max-w-lg mx-auto my-8 p-6 border border-gray-300 rounded-lg text-center bg-white shadow-md">
				<h2 className="text-2xl font-bold mb-4 text-gray-800">Game Over!</h2>
				<p className="mb-6 text-gray-600">You've completed the adventure.</p>
				<p className="mb-6 text-gray-600">Your total convenience points: <strong>{conveniencePoints}</strong></p>
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
		<div className="size-full flex-1 my-8 p-6 md:p-8 border rounded-lg text-center bg-gray-50 shadow-lg overflow-hidden">
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
					<p className="text-lg font-medium mb-4 text-gray-800">{currentQuestion.question}</p>
					<p className="mb-4 text-gray-700">Total Convenience Points: <strong>{conveniencePoints}</strong></p>

					{currentQuestion.image && (
						<img
							src={currentQuestion.image}
							alt={currentQuestion.question}
							className="max-w-full h-auto max-h-72 object-contain mb-6 rounded border mx-auto"
						/>
					)}

					{!showOutcome && (
						<div className="flex flex-col gap-3">
							{currentQuestion.options.map((option) => (
								<button
									key={option.id}
									onClick={() => handleOptionSelect(option)}
									className="w-full px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-150 disabled:border-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed"
									disabled={showOutcome}
								>
									{option.text}
								</button>
							))}
						</div>
					)}

					{showOutcome && selectedOption && (
						<div className="mt-6 p-4 bg-gray-100 border border-gray-300 rounded">
							<p className="text-base italic mb-4 text-gray-700">{selectedOption.outcome}</p>

							{currentQuestion.blurb && (
								<div className="mb-4 text-left">
									<h3 className="text-lg font-semibold text-gray-800">What actually happened:</h3>
									<p className="text-gray-700">{currentQuestion.blurb}</p>
								</div>
							)}

							{currentQuestion.articleLinks && currentQuestion.articleLinks.length > 0 && (
								<div className="mt-4 text-left">
									<h3 className="text-lg font-semibold text-gray-800">Related Articles:</h3>
									<ul className="list-disc list-inside text-blue-600">
										{currentQuestion.articleLinks.map((link, index) => (
											<li key={index}>
												<a href={link} target="_blank" rel="noopener noreferrer" className="underline">
													{link}
												</a>
											</li>
										))}
									</ul>
								</div>
							)}

							<button
								onClick={handleNextQuestion}
								className="mt-4 px-5 py-2 bg-green-600 text-white rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-150"
							>
								Next Question
							</button>
						</div>
					)}
				</motion.div>
			</AnimatePresence>
		</div>
	);
}

export default GamePage;
