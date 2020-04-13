import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import './index.css';
import Home from './components/home';
import SandboxAPI from './components/discogsSandbox';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      {/* <Home></Home>
      <SandboxAPI></SandboxAPI> */}

      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        <SandboxAPI></SandboxAPI>
      </BrowserRouter>
    </div>
  );
}

export default App;
