import React, { useState } from 'react';
import { Transition, Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GamePage from './components/GamePage'; // Assuming GamePage uses Tailwind now too
import { gameQuestions } from './assets/gameData';

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

// --- WriteupPage Component ---
function WriteupPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto bg-gray-50 min-h-screen w-full">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-10 border-b pb-4">
        Game Questions Breakdown
      </h1>

      {gameQuestions.map((question, index) => (
        <Disclosure
          key={question.id}
          as="div"
          className="mb-12 w-full" // Added w-full here to fix the width problem.
        >
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full p-6 bg-white rounded-lg shadow-md mb-2">
                <div className="flex items-center">
                  <h2 className="text-xl font-semibold text-indigo-700 mr-2">
                    Question {index + 1}
                  </h2>
                </div>
                <ChevronUpIcon
                  className={`${open ? '' : 'transform rotate-180'} w-5 h-5 text-indigo-500`}
                />
              </Disclosure.Button>
              <Transition
                show={open}
                enter="transition-opacity duration-75"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Disclosure.Panel className="p-6 bg-white rounded-lg shadow-md">
                  <div className="mb-6 border-b pb-4">
                    <h3 className="text-2xl font-semibold text-gray-900 leading-snug">
                      {question.question}
                    </h3>
                  </div>

                  {question.articleLinks && question.articleLinks.length > 0 && (
                    <div className="mb-4">
                      <h3 className="text-lg font-medium text-gray-700 mb-2">Related Articles:</h3>
                      <ul className="list-disc list-inside pl-4 space-y-1">
                        {question.articleLinks.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            <a
                              href={link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
                            >
                              {link}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {question.blurb && (
                    <div className="mb-5 p-3 bg-blue-50 border-l-4 border-blue-400 rounded-r-md">
                      <p className="text-sm text-gray-700 italic">{question.blurb}</p>
                    </div>
                  )}

                  <div>
                    <h3 className="text-lg font-medium text-gray-700 mb-3">Options:</h3>
                    <div className="space-y-5">
                      {question.options.map((option) => (
                        <div key={option.id} className="p-4 border border-gray-200 rounded-md bg-gray-50">
                          <p className="font-semibold text-gray-800 mb-2">{option.text}</p>
                          <div className="mb-2 pl-4 border-l-2 border-green-500">
                            <p className="text-sm text-gray-700 whitespace-pre-wrap">{option.outcome.trim()}</p>
                          </div>
                          <div className="text-sm mt-3">
                            <span className="font-medium text-red-600">Data Leaks:</span>
                            <span className="ml-2 text-red-700">
                              {option.leaks && option.leaks.length > 0 ? option.leaks.join(', ') : 'None'}
                            </span>
                          </div>
                          <div className="text-sm mt-1">
                            <span className="font-medium text-indigo-600">Convenience Points:</span>
                            <span className="ml-2 text-indigo-700">{option.conveniencePoints}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      ))}
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
        <main className="flex-grow flex flex-col container mx-auto p-4 md:p-6">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/game" element={<GamePage />} />
            <Route path="/writeup" element={<WriteupPage />} />
          </Routes>
        </main>

        {/* Optional: Footer */}
        <footer className="bg-gray-800 text-white text-center p-4 mt-auto">
             CS 492 Ethics Project - Group X - 202X
        </footer>

      </div>
    </Router>
  );
}

export default App;