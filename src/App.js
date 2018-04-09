import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
import Login from './Components/Login';                   // kianne
import HomeProfProfile from './Components/HomeProfProfile';
import HomeProfile from './Components/HomeProfile';       // kianne
import AdviserAdvisee from './Components/AdviserAdvisee'; // alexis
import AdviserAdviseeUser from './Components/AdviserAdviseeUser'; // alexis
import ListSchedProf from './Components/ListSchedProf';   // vis
import ListSchedCourse from './Components/ListSchedCourse';       // vis
import ListCourseOfferings from './Components/ListCourseOfferings';       // vis
import EditProfile from './Components/EditProfile';       // jyra
import CreateViewReports from './Components/CreateViewReport';       // vis
import CreateCurriculum from './Components/Curriculum';       // vis
import SwapSchedule from './Components/SwapSchedule';     // yentl
import AddUser from './Components/AddUser';               // alexis
import EditUser from './Components/EditUser';             // alexis
                                                          // novrylle
var autoBind = require('auto-bind')
var session = new Date()

class App extends Component {
  constructor(props){
    super(props)
    autoBind(this)
  }

  showTime(){
    var actual = new Date()
    if(session.getTime()+1800000 <= actual.getTime()){
      window.Materialize.toast("Session Expired!")
    }
    else{
      window.Materialize.toast("Session Active")
    }
  } //socket .io required from back-end

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
            <Route exact={true} path="/adviser-advisee-user" component={AdviserAdviseeUser}/>
            <Route exact={true} path="/list-sched-prof" component={ListSchedProf}/>
            <Route exact={true} path="/list-sched-course" component={ListSchedCourse}/>
            <Route exact={true} path="/list-courses" component={ListCourseOfferings}/>
            <Route exact={true} path="/curriculum" component={CreateCurriculum}/>
            <Route exact={true} path="/reports" component={CreateViewReports}/>
            <Route exact={true} path="/add-user" component={AddUser}/>
            <Route exact={true} path="/edit-user" component={EditUser}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
