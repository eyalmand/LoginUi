import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Login/Login';
import Register from './Register/Register';

function App() {
  return (
    <div className="login-wrapper">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Login />
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
