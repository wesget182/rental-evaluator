import React from 'react';

const MainContainer = () => {
  return (
    <div>
      <p>main display</p>
      <div>rental evaluator</div>
      {/* <label htmlFor='location'>Search:</label> */}
      <input id='location' type='text' className="form-control" />
      <button onClick={ async () => {
        const params = {
          location: document.getElementById('location').value
        };
        const qs = new URLSearchParams(params).toString();
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
