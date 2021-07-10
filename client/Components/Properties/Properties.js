import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Properties = () => {
  const history = useHistory();
  const routeChange = (path) => history.push(path);

  return (
    <div>
      <h1>My Properties</h1>
      <Button variant="contained" color="primary" onClick={() => routeChange('/new-property')}>
        Add Property
      </Button>
    </div>
  );
};

export default Properties;
