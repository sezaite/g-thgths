import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import Blogs from './components/blogs/Blogs';
import Work from './components/work/Work';
import './App.scss';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import useFetch from './components/helpers/useFetch';

function App() {
  const dataURL = 'data.json';
  const { data, isFetching, error } = useFetch(dataURL);
  // const [data, setData] = useState({
  //   albums: [],
  //   blogs: [],
  //   isFetching: true
  // });

  // const getData = () => {
  //   axios.get(dataURL, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     }
  //   }).then(resp => {
  //     setData({
  //       blogs: resp.data.blogs,
  //       albums: resp.data.albums,
  //       isFetching: false
  //     });
  //   })
  // }

  // useEffect(() => {
  //   getData();
  // }, []);

  return isFetching ? <h1>Loading...</h1> : (
    <Router basename={process.env.PUBLIC_URL}>
      <Nav />
      <Switch>
        {error && <h3>Data loading error</h3>}
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
        <Route path="/blogs/:id">
          <Blogs data={data.blogs} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

