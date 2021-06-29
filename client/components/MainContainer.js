import React from 'react';
import NavBar from './NavBar';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';

const MainContainer = () => {
  return (
    <div>
      <Container>
        <Box>
          <Card>search field</Card>
        </Box>
        <Box>map</Box>
      </Container>
    </div>
  );
};

export default MainContainer;
