import React from 'react';
import './App.css';
import {MovieList} from "./pages/MovieList/MovieList";
import {Header} from "./components/Header/Header";
import {BrowserRouter, Routes} from "react-router-dom";
import {Route} from "react-router";
import {MovieDetails} from "./pages/MovieDetail/MovieDetails";
import { Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
          <Routes>
              <Route element={<MovieList/>} path='/movies'/>
              <Route element={<MovieDetails/>} path='/movies/:id'/>
              <Route path="/" element={<Navigate replace to="/movies" />} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
