import React from 'react';
import NavBar from './NavBar';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';

const MainContainer = () => {
  return (
    <div>
<<<<<<< HEAD
      <Container>
        <Box>
          <Card>search field</Card>
        </Box>
        <Box>map</Box>
      </Container>
=======
      <p>main display</p>
      <div>rental evaluator</div>
      <button onClick={ async () => {
        let res = await fetch('/api/clickMe');
        res = await res.json();
        console.log(JSON.stringify(res));
        const node = document.getElementById('listings');
        node.innerHTML = JSON.stringify(res);
      } }>
        Click me
      </button>
      <div id='listings'></div>
>>>>>>> dev
    </div>
  );
};

export default MainContainer;
