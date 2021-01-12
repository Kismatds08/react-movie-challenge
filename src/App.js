
import './App.css';
import React, { useState, useEffect } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/home/home.componet';
import NavBar from './components/header/header.component';
import Series from './pages/series/series.component';
import Movies from './pages/movies/movies.component';

function App() {

  const [mediaList, setMediaList] = useState([])
  
  useEffect(()=>{
    fetch('https://raw.githubusercontent.com/arjunuvladimer/react-coding-challenge/master/feed/sample.json')
    .then(response => response.json())
    .then((object) => setMediaList(object.entries))
  }, [])
  
  const movies = mediaList.filter((item)=>{
    return item.movieType === 'movie'
  }
  )
  const series = mediaList.filter((item) => {
    return item.programType === 'series'
  })
  console.log(JSON.stringify(series));

  return (

    <BrowserRouter>
    <NavBar/>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/movies'render={() => <Movies media={movies}/>}/>
      <Route path='/series'render={() => <Series media={series}/>}/>
    </Switch>
    </BrowserRouter>


  );
}

export default App;
