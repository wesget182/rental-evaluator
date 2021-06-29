import React, { useState, useEffect } from 'react';
import { Container, Jumbotron, Navbar } from 'react-bootstrap';
import React from 'react';
import SignIn from './components/Signin';
import MainContainer from './components/MainContainer';
import Register from './components/Register';
import Favorites from './components/Favorites';
import NavBar from './components/NavBar';

import { Switch, Route, Redirect } from 'react-router-dom';
import MapView from './MapView';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const App = () => {
  const [darkState, setDarkState] = useState(false);
  const palletType = darkState ? 'dark' : 'light';

  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });
  // const handleThemeChange = () => {
  //   setDarkState(!darkState);
  // };
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="router">
        {console.log('DARKSTATE IN APP', darkState)}
        <NavBar setDarkState={setDarkState} darkState={darkState} />
        {/* <NavBar handleThemeChange={handleThemeChange} darkState={darkState} /> */}

        <main>
          <Switch>
            <Route exact path="/home" component={MainContainer} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/favs" component={Favorites} />
            <Route exact path="/" component={MapView} />
          </Switch>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
