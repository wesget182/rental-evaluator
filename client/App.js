import React from 'react';
import SignIn from './components/Signin';
import MainContainer from './components/MainContainer';
import Register from './components/Register';

import { Switch, Route, Redirect } from 'react-router-dom';

const App = () => {
  return (
    <div className="router">
      <main>
        <Switch>
          <Route exacxt path="/home" component={MainContainer} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
