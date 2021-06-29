import React from 'react';
import SearchBar from './SearchBar';

const MainContainer = () => {
  return (
    <div>
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
      <SearchBar/>
      <div id='listings'></div>
    </div>
  );
};

export default MainContainer;
