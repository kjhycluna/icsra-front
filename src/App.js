import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import HomeProfile from './Components/HomeProfile';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact={true} path="/" component={Login}/>
            <Route exact={true} path="/home" component={HomeProfile}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
