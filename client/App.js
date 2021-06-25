import React from 'react';
// import LandingPage from '../FE/LandingPage';
import { Container, Jumbotron, Navbar } from 'react-bootstrap';
import SignIn from './components/Signin'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';


const App = () => {

  {/* <div>rental evaluator</div>
  <button onClick={ () => alert('hello')}>
    Click me
  </button> */}
  return (
  
    <main>
      <Switch>
          {/* <Route exact path="/" component={MainDisplay} /> */}
          <Route exact path="/signin" component={SignIn} />
          {/* <Route exact path="/user" component={Register} /> */}
        </Switch>
    </main>
  

  );
};

export default App;