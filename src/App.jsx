import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GamePage from './components/GamePage';
import WriteupPage from './components/WriteupPage';

// --- HomePage Component ---
function HomePage() {
	return (
		<div className="text-center p-8">
			<h1 className="text-4xl font-bold text-gray-800 mb-6">
				Welcome to the Privacy Adventure!
			</h1>
			<p className="mb-8 text-gray-600">
				Welcome to Privacy Adventure! This game simulates everyday online scenarios where you'll make decisions that impact your privacy.
				Each choice offers different levels of convenience, but may also compromise your privacy to varying degrees. Your goal is to understand the trade-offs between ease-of-use and protecting your personal information.
				As you play, you'll accumulate 'convenience points' based on your choices. Be mindful of the permissions you grant and the terms you accept. Some options may seem harmless, but could lead to unexpected data leaks!
			</p>

			<div className="space-y-4">
				<Link
					to="/game"
					className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200 ease-in-out"
				>
					Start Game Simulation
				</Link>
				<br />
				<Link
					to="/writeup"
					className="inline-block px-6 py-3 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 transition duration-200 ease-in-out"
				>
					Read Project Writeup
				</Link>
			</div>
		</div>
	);
}

// --- Main App Component ---
function App() {
	return (
		<Router>
			{/* Use flex column to structure Nav and Content, ensure min height */}
			<div className="App flex flex-col min-h-screen bg-gray-100">

				{/* === Navigation Bar === */}
				<nav className="bg-white shadow-md w-full"> {/* White background, shadow, full width */}
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Max width container, padding */}
						<div className="flex items-center justify-center h-16"> {/* Flexbox, center items, height */}
							<div className="flex items-center space-x-6"> {/* Spacing between links */}
								<Link
									to="/"
									className="text-gray-700 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md text-lg font-medium transition duration-150 ease-in-out" // Styling for links
								>
									Home
								</Link>
								<Link
									to="/game"
									className="text-gray-700 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md text-lg font-medium transition duration-150 ease-in-out" // Styling for links
								>
									Game
								</Link>
								<Link
									to="/writeup"
									className="text-gray-700 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md text-lg font-medium transition duration-150 ease-in-out" // Styling for links
								>
									Writeup
								</Link>
							</div>
						</div>
					</div>
				</nav>

				{/* === Page Content Area === */}
				{/* 'flex-grow' makes this div take up remaining vertical space */}
				<main className="flex-grow flex flex-col w-full h-full">
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/game" element={<GamePage />} />
						<Route path="/writeup" element={<WriteupPage />} />
					</Routes>
				</main>


			</div>
		</Router>
	);
}

export default App;