import React, { useState, useEffect } from 'react';
import SignIn from './components/Signin';
import MainContainer from './components/MainContainer';
import Register from './components/Register';
import Favorites from './components/Favorites';
import NavBar from './components/NavBar';
import Test from './components/Test'

import { Switch, Route, Redirect } from 'react-router-dom';
import MapView from './MapView';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const App = () => {
  const [darkState, setDarkState] = useState(false);
  const palletType = darkState ? 'dark' : 'light';
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const darkTheme = createMuiTheme({
    palette: {
      type: 'light',
    },
  });
  // const handleThemeChange = () => {
  //   setDarkState(!darkState);
  // };
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="router">
        {console.log('DARKSTATE IN APP', darkState)}
        
        {/* <NavBar handleThemeChange={handleThemeChange} darkState={darkState} /> */}

        <main>
          <Switch>
          
            <Route exact path="/">
              <NavBar 
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                setDarkState={setDarkState} 
                darkState={darkState} 
              />
              <MainContainer
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
            />
            
            </Route>
            <Route exact path="/signin">
              <SignIn
                isLoggedIn={isLoggedIn} 
                setIsLoggedIn={setIsLoggedIn} 
              />
            </Route>
            
            <Route exact path="/register" >
              <Register
                isLoggedIn={isLoggedIn} 
                setIsLoggedIn={setIsLoggedIn}
            /> 
            </Route>
            <Route exact path="/favs">
              <NavBar 
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                  setDarkState={setDarkState} 
                  darkState={darkState} 
                />
              <Favorites
                isLoggedIn={isLoggedIn} 
                setIsLoggedIn={setIsLoggedIn}
              />
            </Route>
            <Route exact path="/test" component={Test} />
            
            
          </Switch>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
