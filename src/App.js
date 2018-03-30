import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import routes from './router/routes';

class App extends Component {
  render() {
    return (
      <div className="App">
   <Nav/>
 
   {routes}

      </div>
    );
  }
}

export default App;
