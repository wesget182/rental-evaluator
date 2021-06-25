import React from 'react';
// import LandingPage from '../FE/LandingPage';
import { Container, Jumbotron, Navbar } from 'react-bootstrap';
// import DeckList from '../FE/DecksList';
// import { DeckCards } from '../FE/DeckCards';
// import { ReviewCards }  from '../FE/ReviewCards';
import SearchBar from './Components/SearchBar'
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
      <button onClick={ () => alert('hello')}>
        Click me
      </button>
      <SearchBar/>  
    </>
  );
};

export default App;