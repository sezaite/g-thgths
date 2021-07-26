import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import BlogPage from './components/blogs/BlogPage';
import Work from './components/work/Work';
import './App.scss';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import useFetch from './components/helpers/useFetch';
import ScrollToTop from './components/helpers/ScrollToTop';

function App() {
  const dataURL = 'https://sezaite.github.io/g-thgths/data.json'; /* 'http://localhost:3000/g-thgths/data.json'; */
  const { data, isFetching, error } = useFetch(dataURL);

  return isFetching ? <h1>Loading...</h1> : (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <Nav />
      <Switch>
        {error && <h3>Data loading error</h3>}
        <Route exact path="/">
          <Home data={data} />
        </Route>

        <Route path="/work">
          <Work data={data.albums} />
        </Route>

        <Route path="/blogs/:id">
          <BlogPage data={data.blogs} />
        </Route>
        <Route path="*">
          <h1>404 Not found</h1>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

