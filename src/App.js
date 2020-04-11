import React from 'react';
import './App.css';

import './index.css';
import Home from './components/home';
import SandboxAPI from './components/discogsSandbox';
require('dotenv').config();

function App() {
  return (
    <div className="App">
      <Home></Home>

      <h1>Test</h1>
      <SandboxAPI></SandboxAPI>
    </div>
  );
}

export default App;
