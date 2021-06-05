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
  const dataURL = 'data.json';
  const [data, setData] = useState({
    albums: [],
    blogs: [],
    isFetching: false
  });

  const getData = () => {
    setData({
      ...data,
      isFetching: true
    });
    if (cache.current[dataURL]) {
      const cacheData = cache.current[dataURL];
      setData({
        albums: cacheData.albums,
        blogs: cacheData.blogs,
        isFetching: false
      });
    } else {
      axios.get(dataURL, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }).then(resp => {
        cache.current[dataURL] = resp.data;
        setData({
          blogs: resp.data.blogs,
          albums: resp.data.albums,
          isFetching: false
        });
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
          <Home data={data} />
        </Route>
      </Switch>
      <Switch>
        <Route path="/work">
          <Work data={data.albums} />
        </Route>
      </Switch>
      <Switch>
        <Route path="/blogs">
          <Blogs data={data.blogs} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

