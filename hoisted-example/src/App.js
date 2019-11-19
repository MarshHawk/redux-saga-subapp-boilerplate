import React from 'react';
import logo from './logo.svg';
import './App.css';
import SubApp from 'redux-saga-subapp-boilerplate';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SubApp />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save too reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
