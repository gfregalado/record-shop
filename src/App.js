import React from 'react';
import './App.css';

import './index.css';
import Home from './components/home';
require('dotenv').config();

function App() {
  return (
    <div className="App">
      <Home></Home>

      <h1>Test</h1>
    </div>
  );
}

export default App;