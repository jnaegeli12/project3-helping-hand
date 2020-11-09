import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Submit from "./pages/Submit";
import Profile from "./pages/Profile";
import Results from './pages/Results';

export default function App() {

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/home"]}>
            <Home />
          </Route>
          <Route exact path="/submit">
            <Submit />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/results">
            <Results />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
  