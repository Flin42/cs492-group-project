import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GamePage from './components/GamePage'; // Import the GamePage
import './App.css'; // Keep or modify default App styling

// Placeholder for other pages
function HomePage() {
  return (
    <div>
      <h1>Welcome to the Adventure!</h1>
      <Link to="/game">Start Game</Link> <br />
      <Link to="/writeup">Read Writeup</Link>
    </div>
  );
}

function WriteupPage() {
  return <h1>Game Writeup</h1>;
}


function App() {
  return (
    <Router>
      <div className="App">
        {/* Basic Navigation (You might want a proper Navbar component) */}
        <nav style={{ marginBottom: '20px', paddingBottom: '10px', borderBottom: '1px solid #eee' }}>
          <Link to="/" style={{ marginRight: '15px' }}>Home</Link>
          <Link to="/game" style={{ marginRight: '15px' }}>Game</Link>
          <Link to="/writeup">Writeup</Link>
        </nav>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game" element={<GamePage />} /> {/* Add route for GamePage */}
          <Route path="/writeup" element={<WriteupPage />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;