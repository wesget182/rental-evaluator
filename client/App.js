/** @format */

import React, { useState } from 'react';
import SignIn from './components/Signin';
import MainContainer from './components/MainContainer';
import Register from './components/Register';
import Favorites from './components/Favorites';
import NavBar from './components/NavBar';
import ListView from './components/ListView';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Properties from './Components/Properties/Properties';
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <main>
        <Switch>
          <Route exact path='/'>
            <NavBar />
            <MainContainer />
            <ListView />
          </Route>
          <Route exact path='/properties'>
            <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <Properties />
          </Route>
          <Route exact path='/signin'>
            <SignIn />
          </Route>
          <Route exact path='/register'>
            <Register />
          </Route>
          <Route exact path='/favs'>
            <NavBar />
            <Favorites />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
