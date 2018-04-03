import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
import Login from './Components/Login';                   // kianne
import HomeProfProfile from './Components/HomeProfProfile';
import HomeProfile from './Components/HomeProfile';       // kianne
import AdviserAdvisee from './Components/AdviserAdvisee'; // alexis
import ListSchedProf from './Components/ListSchedProf';   // vis
import ListSchedCourse from './Components/ListSchedCourse';       // vis
import ListCourses from './Components/ListCourses';       // vis
import EditProfile from './Components/EditProfile';       // jyra
import CreateViewReports from './Components/CreateViewReport';       // vis
import CreateCurriculum from './Components/Curriculum';       // vis
import SwapSchedule from './Components/SwapSchedule';     // yentl

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact={true} path="/" component={Login}/>
            <Route exact={true} path="/home" component={HomeProfProfile}/>
            <Route exact={true} path="/home/admin" component={HomeProfile}/>
            <Route exact={true} path="/edit-profile" component={EditProfile}/>
            <Route exact={true} path="/home/swap" component={SwapSchedule}/>
            <Route exact={true} path="/adviser-advisee" component={AdviserAdvisee}/>
            <Route exact={true} path="/list-sched-prof" component={ListSchedProf}/>
            <Route exact={true} path="/list-sched-course" component={ListSchedCourse}/>
            <Route exact={true} path="/list-courses" component={ListCourses}/>
            <Route exact={true} path="/curriculum" component={CreateCurriculum}/>
            <Route exact={true} path="/reports" component={CreateViewReports}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
