import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GamePage from './components/GamePage';
import WriteupPage from './components/WriteupPage';

// --- HomePage Component ---
function HomePage() {
  return (
    <div className="flex justify-center h-screen"> {/* Added flex and justify-center */}
      <div className="text-center p-8 max-w-5xl"> {/* Added max-w-3xl */}
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Welcome to our CS492 Small Group Project!
        </h1>
        <p className="mb-8 text-gray-600 text-xl text-justify">
			Welcome to our interactive CS492 website! This site is dedicated to exploring the impact of digital privacy and the ways our personal data is collected, shared, and exploited. Through this project, we aim to educate users about real-world case studies and data practices, demonstrating how personal data can be compromised and what actions can prevent it.
		</p>
		<p className="mb-8 text-gray-600 text-xl text-justify">
			Our site features an interactive game designed to simulate everyday scenarios where privacy may be at risk. You will navigate fictional (but realistic) situations where you will need to balance convenience, enjoyment, and privacy. Each decision you make comes with trade-offs, and at the end of the experience, you will receive a comprehensive report detailing any personal data leaks and how they occurred. You can play this by pressing the <b>Game</b> tab up top!
		</p>
		<p className="mb-8 text-gray-600 text-xl text-justify">
			There is also thorough write-up that explores the broader context of digital privacy. This section covers the research and real-world scenarios that inspired our game’s questions, along with related case studies highlighting privacy failures and successes. By connecting these stories to your own experience in the game, we hope to show how real privacy issues are and why they matter. Check it out by pressing the <b>Writeup</b> tab up top!
        </p>

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