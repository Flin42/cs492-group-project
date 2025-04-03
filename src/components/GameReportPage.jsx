// src/components/GameReportPage.jsx
import React from 'react';
import { motion } from 'framer-motion';

// Helper function to get unique leaks
const getUniqueLeaks = (userAnswers) => {
    const allLeaks = userAnswers.reduce((acc, answer) => {
        // Ensure leaks array exists and add its elements to the accumulator
        if (answer.leaks && Array.isArray(answer.leaks)) {
            return acc.concat(answer.leaks);
        }
        return acc;
    }, []);
    // Use Set for uniqueness and convert back to array
    return [...new Set(allLeaks)];
};

function GameReportPage({ gameQuestions, userAnswers, totalSatisfactionPoints, onRestart }) {
    const uniqueLeaks = getUniqueLeaks(userAnswers);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto my-8 p-6 md:p-8 border border-gray-300 rounded-lg bg-white shadow-lg text-gray-800"
        >
            <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">
                Your Results:
            </h2>
            <p className="text-center mb-6 text-lg text-gray-600">
                You've completed the adventure! Here's a summary of your choices and their impact.
            </p>

            {/* Final Score */}
            <div className="text-center mb-8 p-4 bg-blue-50 border border-blue-200 rounded-md">
                <p className="text-xl font-semibold text-blue-800">
                    Total Satisfaction Points: <strong>{totalSatisfactionPoints}</strong>
                </p>
                <p className="text-sm text-blue-700 mt-1">
                    Higher points often mean more data shared for satisfaction.
                </p>
            </div>

            {/* Summary of Choices */}
            <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-700 border-b pb-2">
                    Your Choices:
                </h3>
                <ul className="space-y-4">
                    {userAnswers.map((answer, index) => {
                        const question = gameQuestions[answer.questionIndex];
                        const selectedOption = question?.options.find(option => option.id === answer.selectedOptionId); // Find the option
                        return (
                            <li key={`report-${index}`} className="p-4 border border-gray-200 rounded-md bg-gray-50">
                                <p className="font-semibold text-gray-700 mb-1">
                                    Q{answer.questionIndex + 1}: {question?.summary || `Question ${answer.questionIndex + 1}`}
                                </p>
                                <p className="text-sm text-gray-600 italic mb-2">
                                    "{question?.question}"
                                </p>
                                <p className="my-1 text-gray-800 flex justify-between">
                                    <span className="font-bold">Your choice:</span>
                                </p>
                                <p>
                                    {answer.selectedOptionText}
                                </p>
                                <p className="my-1 text-gray-800 flex justify-between">
                                    <span className="font-bold">The Outcome:</span>
                                </p>
                                <p>
                                    {selectedOption.outcome}
                                </p>
                                {answer.leaks && answer.leaks.length > 0 && (
                                    <p className="text-sm text-red-600 mt-1">
                                        <span className="font-medium">Potential Leaks:</span> {answer.leaks.join(', ')}
                                    </p>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </div>

            {/* Summary of Leaks */}
            <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-700 border-b pb-2">
                    Potential Data Leaks Summary:
                </h3>
                {uniqueLeaks.length > 0 ? (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                        <p className="text-red-800 font-medium mb-2">
                            Based on your choices, the following types of data might have been exposed or collected:
                        </p>
                        <ul className="list-disc list-inside text-red-700 space-y-1">
                            {uniqueLeaks.map(leak => (
                                <li key={leak}>
                                    <span className="capitalize">{leak.replace(/_/g, ' ')}</span> {/* Make it more readable */}
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <p className="text-green-700 bg-green-50 border border-green-200 p-4 rounded-md">
                        Congratulations! Based on your choices, you minimized potential data leaks effectively.
                    </p>
                )}
            </div>

            {/* Play Again Button */}
            <div className="text-center mt-8">
                <button
                    onClick={onRestart}
                    className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-200 ease-in-out shadow-md"
                >
                    Play Again?
                </button>
            </div>
        </motion.div>
    );
}

export default GameReportPage;