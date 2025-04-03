// src/components/GameIntroPage.jsx
import React from 'react';

function GameIntroPage({ onStart }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Welcome to The Privacy Challenge</h1>
      <p className="text-lg mb-4 text-gray-700 max-w-3xl">
        In this interactive experience, your goal is simple: <strong> try and navigate the web, maximizing your satisfaction while keeping your personal data safe.</strong>        
      </p>
	  <p className="text-lg mb-4 text-gray-700 max-w-3xl">
	  	In the game, you will be presented with everyday scenarios and a list of options. 
        Each choice you make will come with trade-offs. Will you prioritize ease of use and enjoyment or safeguard your personal information?
        By the end of the game, you'll receive a detailed report highlighting what data, if any, was leaked and how it happened.
	  </p>

	  <p className="text-lg mb-4 text-gray-700 max-w-3xl">
	  	For the best experience, try to make realistic choices as if you were navigating them in the real world.
		While the scenarios you encounter are fictional, they are inspired by real-life situations 
		and privacy practices observed in the digital world.
	  </p>
      <button
        onClick={onStart}
        className="mt-8 px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
      >
        Start Game
      </button>
    </div>
  );
}

export default GameIntroPage;
