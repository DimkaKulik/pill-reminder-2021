import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.js'
import Landing from './Landing.js'
import List from './List.js'

class App extends React.Component {
  render() {
     return (<div>
       <Header />
       <Landing />
     </div>);
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);