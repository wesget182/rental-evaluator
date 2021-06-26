import React from 'react';
// import LandingPage from '../FE/LandingPage';
import { Container, Jumbotron, Navbar } from 'react-bootstrap';
// import DeckList from '../FE/DecksList';
// import { DeckCards } from '../FE/DeckCards';
// import { ReviewCards }  from '../FE/ReviewCards';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';


const App = () => {

  return (
    <>
      <div>rental evaluator</div>
      <button onClick={ async () => {
        const res = await fetch('/clickMe');
        const res1 = await res.json();
        console.log(JSON.stringify(res1));
        const node = document.getElementById('listings');
        node.innerHTML = JSON.stringify(res1);
      } }>
        Click me
      </button>
      <div id='listings'></div>
    </>
  );
};

export default App;