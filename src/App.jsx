import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GamePage from './components/GamePage'; // Assuming GamePage uses Tailwind now too

// --- HomePage Component ---
function HomePage() {
  return (
    // Add padding and center text
    <div className="text-center p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Welcome to the Privacy Adventure!
      </h1>
      {/* Style links like buttons for better interaction */}
      <div className="space-y-4"> {/* Adds vertical space between block elements */}
        <Link
          to="/game"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200 ease-in-out"
        >
          Start Game Simulation
        </Link>
        <br /> {/* Keep line break or use flexbox for side-by-side */}
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
    <div className="p-8 max-w-3xl mx-auto"> {/* Padding, max-width and centering */}
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Project Writeup
      </h1>
      {/* Add your writeup content here */}
      <p className="text-gray-700">
        This section will contain the detailed writeup for the project...
        (You'll replace this with your actual content)
      </p>
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
        <main className="flex-grow flex flex-col container max-w-screen max-h-screen mx-auto p-4 md:p-6">
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