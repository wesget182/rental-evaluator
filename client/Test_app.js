/*

This component is for simple testing only.

To use:
In root/index.js - hang <TestApp /> in place of <App />

REMEMBER TO CHANGE IT BACK BEFORE PUSHING

-Adam

*/

import React, {Component} from 'react';
import fetch from 'node-fetch';



class TestApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //nothing
    }

    this.addUser = this.addUser.bind(this);
    this.serverTest = this.serverTest.bind(this);
    this.addFav = this.addFav.bind(this);
  };

  addUser = () => {
    const un = document.getElementById('username').value;
    const pw = document.getElementById('password').value;
    const em = document.getElementById('email').value;
    const body = {
      username: un,
      password: pw,
      email: em
    }
    // fetch('/signup')
    // .then(res=>res.text())
    // .then(data => console.log(data))
    fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify(body) 
    })
    .then(res => res.text())
    .then(data => console.log(data))
    .catch(err => console.log('add user error ', err))
  }

  serverTest = () => {
    fetch('/testRoute')
    .then(res => res.text())
    //.then(res => res.text()) //this should log 'test success' in chrome
    .then(data => console.log(data))  
  }

  //add fav test
  addFav = () => {
    const body = {
      username: "test",
      favorite: {
        address: "test",
        coords: "test",
        price: "1000"
      }
    }
    fetch('/api/addFav', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify(body)
    })
    .then(res => console.log(res))
    .then(data => console.log(data))
    .catch(err => console.log('frontend err, ', err))
  }

  render() {
    return (
      <div>
        <form>
          <label>Username: </label>
          <input
          type="text"
          id="username" 
          />
          <label>Email: </label>
          <input
          type="text"
          id="email"
          />
          <label>Password: </label>
          <input 
          type="text"
          id="password"
          />
        </form>
        <button onClick={() =>{this.addUser()}}>Submit User Info</button>
        <button onClick={() => {this.serverTest()}}>Ping Server</button>
        <button onClick={() => {this.addFav()}}>Add Favorite Test</button>
      </div>
    )
  }

}

export default TestApp;