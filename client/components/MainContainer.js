import React from 'react';
import SearchBar from './SearchBar';
import NavBar from './NavBar';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import MapView from '../MapView';


const MainContainer = () => {
  return (
    <div>
      <Container>
        <Box>
          {/* <SearchBar/> */}
        </Box>
        <Box>map</Box>
        < MapView />
      </Container>
      <p>main display</p>
      <div>rental evaluator</div>
      {/* <label htmlFor='location'>Search:</label> */}
      <input id='location' type='text' className="form-control" />
      <button onClick={ async () => {
        const params = {
          location: document.getElementById('location').value
        };
        const qs = new URLSearchParams(params).toString();
        console.log(qs);
        console.log(`/api/properties?${qs}`);
        const res = await fetch(`/api/properties?${qs}`)
          .then(res => res.json());
        console.log(JSON.stringify(res, null, 2));
        const node = document.getElementById('listings');
        node.innerHTML = JSON.stringify(res, null, 2);
      } }>
        Click me
      </button>
      
      <pre id='listings'></pre>
    </div>
  );
};

export default MainContainer;
