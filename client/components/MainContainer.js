import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import MapView from '../MapView';

const MainContainer = () => {
  return (
    <Container component="main">
      <Container>
        <Box>
          <MapView />
          
        </Box>
      </Container>
    </Container>
  );
};

export default MainContainer;
