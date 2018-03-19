import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
import Login from './Components/Login';                   // kianne
import HomeProfile from './Components/HomeProfile';       // kianne
import AdviserAdvisee from './Components/AdviserAdvisee'; // alexis
import ListSchedProf from './Components/ListSchedProf';   // vis
import ListCourses from './Components/ListCourses';       // vis
import EditProfile from './Components/EditProfile';       // jyra

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact={true} path="/" component={Login}/>
            <Route exact={true} path="/home" component={HomeProfile}/>
            <Route exact={true} path="/adviser-advisee" component={AdviserAdvisee}/>
            <Route exact={true} path="/list-sched" component={ListSchedProf}/>
            <Route exact={true} path="/list-courses" component={ListCourses}/>
            <Route exact={true} path="/edit-profile" component={EditProfile}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
