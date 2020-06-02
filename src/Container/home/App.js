import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This Assignment is created by Amit Maurya. Use React js</p>
        <a
          className="App-link"
          href="/customer"
          rel="noopener noreferrer"
        >
          Go to Assignment
        </a>
      </header>
    </div>
  );
}

export default App;
