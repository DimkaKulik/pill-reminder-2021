import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.js'
import Landing from './Landing.js'
import List from './List.js'
import Error from './Error.js'
import SignIn from './SignIn.js';
import SignUp from './SignUp.js';
import './index.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const AuthorizationContext = React.createContext()

function isTokenExpired(token) {
  const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
  return (Math.floor((new Date).getTime() / 1000)) >= expiry;
}

function App() {
  let defaultStateValue = false;
  if (sessionStorage.getItem('token') == null) {
    defaultStateValue = false;
  } else {
    defaultStateValue = !isTokenExpired(sessionStorage.getItem('token'))
  }
  const state = React.useState(defaultStateValue);

  const isAuthorized = state[0];
  const reauthorize = () => { state[1](prev => !prev) };

  return (
    <Router>
      <AuthorizationContext.Provider >
        <Header isAuthorized={isAuthorized} reauthorize={reauthorize} />   
        <Switch>
            <Route exact path="/"> 
              <Landing isAuthorized={isAuthorized} reauthorize={reauthorize} />
            </Route>
            <Route exact path="/list"> 
              <List isAuthorized={isAuthorized} reauthorize={reauthorize} />
            </Route>
            <Route path="/signup">
              <SignUp isAuthorized={isAuthorized} reauthorize={reauthorize} />
            </Route>
            <Route path="/signin"> 
              <SignIn isAuthorized={isAuthorized} reauthorize={reauthorize} />
            </Route>
            <Route path="/" component={Error} />
        </Switch>
      </AuthorizationContext.Provider>
    </Router>
  );

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);