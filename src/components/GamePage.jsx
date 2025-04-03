// src/components/GamePage.jsx
import React, { useState } from 'react';
import { gameQuestions } from '../assets/gameData';
import { motion, AnimatePresence } from 'framer-motion';
import GameReportPage from './GameReportPage';
import GameIntroPage from './GameIntroPage';



function getSatisfactionColor(points) {
    const maxPoints = 700;
	const numSteps = 5;
	const stepSize = maxPoints / numSteps;
    const thresholds = [];
    for (let i = 1; i < numSteps; i++) {
        thresholds.push(stepSize * i);
    }

    const colors = ['#ff0000', '#ff9966', '#ffcc66', '#b3e673', '#66cc66'];// Dark Red to Dark Green gradient
    // Determine which color to apply based on the points
    for (let i = 0; i < thresholds.length; i++) {
        if (points <= thresholds[i]) {
            return colors[i];
        }
    }
    return colors[colors.length - 1]; // Return green if above 250
}


function GamePage() {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [selectedOption, setSelectedOption] = useState(null);
	const [showOutcome, setShowOutcome] = useState(false);
	const [gameOver, setGameOver] = useState(false);
	const [satisfactionPoints, setSatisfactionPoints] = useState(0);
	const [userAnswers, setUserAnswers] = useState([]);
	const [showIntroduction, setShowIntroduction] = useState(true);

	const currentQuestion = gameQuestions[currentQuestionIndex];

	const handleStartGame = () => {
		setShowIntroduction(false);
	};

	const handleOptionSelect = (option) => {
		if (showOutcome) return;

		setSelectedOption(option);
		setShowOutcome(true);

		setSatisfactionPoints(prevPoints => prevPoints + option.satisfactionPoints);

		setUserAnswers(prevAnswers => [
			...prevAnswers,
			{
				questionIndex: currentQuestionIndex,
				selectedOptionId: option.id,
				selectedOptionText: option.text,
				leaks: option.leaks || []
			}
		]);
	};

	const handleNextQuestion = () => {
		const nextIndex = currentQuestionIndex + 1;
		if (nextIndex < gameQuestions.length) {
			setSelectedOption(null);
			setShowOutcome(false);
			setCurrentQuestionIndex(nextIndex);
		} else {
			setGameOver(true);
		}
	};

	const handleRestart = () => {
		setCurrentQuestionIndex(0);
		setSelectedOption(null);
		setShowOutcome(false);
		setGameOver(false);
		setSatisfactionPoints(0);
		setUserAnswers([]);
		setShowIntroduction(true);
	};

	const handleDebugComplete = () => {
		const allAnswers = gameQuestions.map((question, index) => {
			const randomIndex = Math.floor(Math.random() * question.options.length);
			const option = question.options[randomIndex]; // Select a random option

			return {
				questionIndex: index,
				selectedOptionId: option.id,
				selectedOptionText: option.text,
				leaks: option.leaks || []
			};
		});

		const totalPoints = allAnswers.reduce((sum, answer) => {
			const option = gameQuestions[answer.questionIndex].options.find(opt => opt.id === answer.selectedOptionId);
			return sum + (option?.satisfactionPoints || 0);
		}, 0);

		setUserAnswers(allAnswers);
		setSatisfactionPoints(totalPoints);
		setGameOver(true); // Directly navigate to the report page
	};


	if (showIntroduction) {
		return <GameIntroPage onStart={handleStartGame} />;
	}

	if (gameOver) {
		return (
			<GameReportPage
				gameQuestions={gameQuestions}
				userAnswers={userAnswers}
				totalSatisfactionPoints={satisfactionPoints}
				onRestart={handleRestart}
			/>
		);
	}

	return (
		<div className="flex-grow flex flex-col text-center items-center w-full h-full overflow-hidden p-12 bg-gray-50 shadow-lg relative">
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
					<p className="mb-4 text-gray-700 text-l font-bold">
						Total Satisfaction Points: <strong style={{ color: getSatisfactionColor(satisfactionPoints) }}>
							{satisfactionPoints}
						</strong>
					</p>

					{currentQuestion.image && (
						<img
							src={currentQuestion.image}
							alt="image"
							className="max-w-full h-auto max-h-124 object-contain mb-6 rounded mx-auto"
						/>
					)}
					<div className="max-w-164">
						<p className="text-lg font-medium mb-4 text-gray-800 text-justify">{currentQuestion.question}</p>

						{!showOutcome && (
							<div className="flex flex-col gap-3">
								{currentQuestion.options.map((option) => (
									<button
										key={option.id}
										onClick={() => handleOptionSelect(option)}
										className="w-full px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-150 disabled:border-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed relative" // Added relative positioning
									>
									<span className="block text-center">{option.text}</span>
									<span className="text-green-400 absolute top-1/2 transform -translate-y-1/2 right-2"> +{option.satisfactionPoints}</span>
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
					</div>
					
				</motion.div>
			</AnimatePresence>

			<button
				onClick={handleDebugComplete}
				className="m-30 w-100 h-10 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
				title="Debug Button: Instantly End Game"
			>
				Debug: End Game
			</button>
		</div>
	);
}

export default GamePage;
