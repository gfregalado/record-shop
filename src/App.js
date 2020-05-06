import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import './index.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Storefront from './components/shop';
import Album from './components/album';
import Artist from './components/artist';

import SandboxAPI from './components/discogsSandbox';

function App() {
  return (
    <div className="App" style={{ backgroundColor: 'rgb(247, 242, 239)' }}>
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shop" exact component={Storefront} />
          <Route path="/artist/:id" exact component={Artist} />
          <Route
            path="/album/:id"
            exact
            render={(props) => <Album {...props} />}
          />
        </Switch>
        <SandboxAPI></SandboxAPI>
      </BrowserRouter>
    </div>
  );
}

export default App;
