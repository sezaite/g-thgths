import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import Blogs from './components/blogs/Blogs';
import Work from './components/work/Work';
import './App.scss';
import Nav from './components/nav/Nav';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
      <Switch>
        <Route path="/work">
          <Work />
        </Route>
      </Switch>
      <Switch>
        <Route path="/blogs">
          <Blogs />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

