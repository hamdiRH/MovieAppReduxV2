import React from "react";
import Navbar from "./navbar";
import { BrowserRouter, Route } from "react-router-dom";
import addmovie from './addmovie'
import movielist from './movielist'

const app = () => {
  return (
<BrowserRouter>
      <Navbar />
      <Route exact path="/" component={movielist} />
      <Route exact path="/addmovie" component={addmovie} />
  </BrowserRouter>
  );
};

export default app;
