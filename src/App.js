import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import './index.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Storefront from './components/shop';
import SandboxAPI from './components/discogsSandbox';

function App() {
  return (
    <div className="App" style={{ backgroundColor: 'rgb(247, 242, 239)' }}>
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shop" exact component={Storefront} />
        </Switch>
        <SandboxAPI></SandboxAPI>
      </BrowserRouter>
    </div>
  );
}

export default App;
