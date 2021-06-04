import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import Blogs from './components/blogs/Blogs';
import Work from './components/work/Work';
import './App.scss';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import axios from "axios";

function App() {
  const cache = useRef({});
  const dataURL = '#';
  const [data, setData] = useState({
    albums: [],
    isFetching: false
  });

  const getData = async () => {
    setData({
      albums: [],
      isFetching: true
    });
    if (cache.current[url]) {
      const data = cache.current[url];
      setData({
        albums: data.albums,
        isFetching: false
      });
    } else {
      const data = await axios.get(dataURL);
      cache.current[url] = data;
      setData({
        albums: data.albums,
        isFetching: false
      })
    }

  }

  useEffect(() => {
    getData();
  }, []);


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
      <Footer />
    </Router>
  );
}

export default App;

