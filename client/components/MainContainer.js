import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import MapView from '../MapView';


const MainContainer = () => {
  return (
    <div>
      <Container>
        
        <Box><MapView/></Box>
        
      </Container>
      {/* <p>main display</p>
      <div>rental evaluator</div>
      <button
        onClick={async () => {
          let res = await fetch('/api/clickMe');
          res = await res.json();
          console.log(JSON.stringify(res));
          const node = document.getElementById('listings');
          node.innerHTML = JSON.stringify(res);
        }}
      >
        Click me
      </button>
      <div id="listings"></div> */}
      <p>main display</p>
      <div>rental evaluator</div>
      {/* <label htmlFor='location'>Search:</label> */}
      <input id="location" type="text" className="form-control" />
      <button
        onClick={async () => {
          const params = {
            location: document.getElementById('location').value,
          };
          const qs = new URLSearchParams(params).toString();
          console.log(`/api/properties?${qs}`);
          const res = await fetch(`/api/properties?${qs}`).then((res) =>
            res.json()
          );
          console.log(JSON.stringify(res, null, 2));
          const node = document.getElementById('listings');
          node.innerHTML = JSON.stringify(res, null, 2);
        }}
      >
        Click me
      </button>
      <br></br>
      <input id="location1" type="text" className="form-control" />
      <button
        onClick={async () => {
          const params = {
            location: document.getElementById('location1').value,
          };
          const qs = new URLSearchParams(params).toString();
          console.log(`/api/properties/target?${qs}`);
          const res = await fetch(`/api/properties/target?${qs}`).then((res) =>
            res.json()
          );
          console.log(JSON.stringify(res, null, 2));
          const node = document.getElementById('listings');
          node.innerHTML = JSON.stringify(res, null, 2);
        }}
      >
        Search target
      </button>
      <pre id="listings"></pre>
    </div>
  );
};

export default MainContainer;
