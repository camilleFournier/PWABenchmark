import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Welcome } from './Welcome/Welcome.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ReactTest</h1>
      </header>
      <Welcome/>
    </div>
  );
}

export default App;
