import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.js'
import Landing from './Landing.js'
import List from './List.js'
import Error from './Error.js'
import SignIn from './SignIn.js';
import SignUp from './SignUp.js';
import './index.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  render() {
     return (<Router>
       <Header />   
       <Switch>
          <Route exact path="/">
            <Landing/>
          </Route>
          <Route exact path="/list">
            <List />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/">
            <Error />
          </Route>
       </Switch>
     </Router>);
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);