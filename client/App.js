/** @format */

import React, { useState } from 'react';
import SignIn from './components/Signin';
import MainContainer from './components/MainContainer';
import Register from './components/Register';
import Favorites from './components/Favorites';
import NavBar from './components/NavBar';
import Properties from './components/Properties/Properties';
import NewProperty from './components/Properties/NewProperty';
import Property from './components/Properties/Property';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <main>
        <Switch>
          <Route exact path="/">
            <NavBar />
            <MainContainer />
          </Route>
          <Route exact path="/properties">
            <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <Properties />
          </Route>
          <Route path="/new-property">
            <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <NewProperty />
          </Route>
          <Route path="/property/:id">
            <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <Property />
          </Route>
          <Route exact path="/signin">
            <SignIn isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/favs">
            <NavBar />
            <Favorites />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
