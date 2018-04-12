import React, { Component } from 'react';
import {Dropdown, Collapsible, CollapsibleItem, NavItem, Icon, Button, Table, MediaBox} from 'react-materialize';
import {Parallax} from 'react-parallax'; //npm install react-parallax --save
import './HomeProfile.css';
import TopNav from './TopNav';
import TopNavProf from './TopNavProf';
import ChangePassword from './ChangePassword';
import AddConsultationHours from './AddConsultationHours';
import cookie from 'react-cookies'
import bg from './images/bg.jpg';
// const autoBind = require('auto-bind');

class HomeProfile extends Component {
	constructor(props){
		super(props)
		this.state = { user: cookie.load('user') }
		console.log(this.state.user)
		// this.state = {
			
		// }
		// autoBind(this);
	}

	createTopNav(){
		if(this.state.user.committee_member === "True"){
			return <TopNav/>
		}else{
			return <TopNavProf/>
		}
	}

	render() {
	    return (
		<div>
            { this.createTopNav() }
			<div >
				<Parallax bgImage={bg} strength={200}>
					<div style={{ height: '400px', width:'100%'}}>
						<div className="name">
							{ this.state.user.fname }  { this.state.user.lname }
						</div>
					</div>

				</Parallax>
				
			</div>
			<div className="settingsBtn">
				<Dropdown trigger={<Button><Icon>settings</Icon></Button>}>
					<NavItem node='a' href='/edit-profile'>EditProfile</NavItem>
					<ChangePassword/>
				</Dropdown>
			</div>

			<div className="feed">
				<div className="side">
					<div>
						<Table>
						  <tbody>
						    <tr>
						      <td>Employee No.:</td>
						      <td>{ this.state.user.empno}</td>
						    </tr>
						    <tr>
						      <td>Rank:</td>
						      <td>{ this.state.user.rank }</td>
						    </tr>
						    <tr>
						      <td>Status:</td>
						      <td>{ this.state.user.status}</td>
						    </tr>
						    <tr>
						      <td>Teaching Load:</td>
						      <td>{ this.state.user.teaching_load}</td>
						    </tr>
						    <tr>
						      <td>Study Load:</td>
						      <td>{ this.state.user.study_load }</td>
						    </tr>
						    <tr>
						      <td>Preferred Subjects:</td>
						      <td>1. </td>
						    </tr>
						    <tr>
						      <td></td>
						      <td>2. </td>
						    </tr>
						    <tr>
						      <td></td>
						      <td>3. </td>
						    </tr>
						  </tbody>
						</Table>
					</div>
				</div>
				
				<div className="tableFeed">
					SCHEDULE
					<Table striped="true">
					  <thead>
					    <tr>
					      <th data-field="course">Time</th>
					      <th data-field="monday">Monday</th>
					      <th data-field="tuesday">Tuesday</th>
					      <th data-field="wednesday">Wednesday</th>
					      <th data-field="thursday">Thursday</th>
					      <th data-field="friday">Friday</th>
					    </tr>
					  </thead>

					  <tbody>
					    <tr>
					      <td ref="7-7:30">7:00-7:30</td>
					      <td ref="mon"></td>
					      <td ref="tue"></td>
					      <td ref="wed">
					      </td> 
					      <td ref="thu"></td>
					      <td ref="fri"></td>
					    </tr>
					    <tr>
					      <td ref="7:30-8">7:30-8:00</td>
					      <td ref="mon"></td>
					      <td ref="tue"></td>
					      <td ref="wed">
					      </td>
					      <td ref="thu"></td>
					      <td ref="fri"></td>
					    </tr>
					    <tr>
					      <td ref="8-8:30">8:00-8:30</td>
					      <td ref="mon"></td>
					      <td ref="tue"></td>
					      <td ref="wed"></td>
					      <td ref="thu"></td>
					      <td ref="fri"></td>
					    </tr>
					  </tbody>
					</Table>

					<div className="add">
						<AddConsultationHours/>
					</div>

					<br />
					<br />
					ADVISEES
					<Collapsible accordion>
					  <CollapsibleItem header='SP Advisees' icon='person'>
						<Table striped="true">
						 	<thead>
						        <tr>
						          <th data-field="name">Name</th>
						          <th data-field="studentNo">Student Number</th>
						          <th data-field="status">Status</th>
						          <th data-field="unitsEarned">Units Earned</th>
						        </tr>
						      </thead>

						      <tbody>
						        <tr>
						          <td>Alvin A Bzxcvbnm</td>
						          <td>20XX-XXXXX</td>
						          <td>Pending</td>
						          <td>119</td>
						        </tr>
						        <tr>
						          <td>Alan C Dqwertyuiop</td>
						          <td>20XX-XXXXX</td>
						          <td>asdfghjkl</td>
						          <td>119</td>
						        </tr>
						        <tr>
						          <td>Jonathan E Fokmjnuhj</td>
						          <td>20XX-XXXXX</td>
						          <td>Pending</td>
						          <td>119</td>
						        </tr>
						      </tbody>
						</Table>
					</CollapsibleItem>
					<CollapsibleItem header='Thesis Advisees' icon='person'>
					    <Table striped="true">
					      <thead>
					        <tr>
					          <th data-field="name">Name</th>
					          <th data-field="studentNo">Student Number</th>
					          <th data-field="status">Status</th>
					          <th data-field="unitsEarned">Units Earned</th>
					        </tr>
					      </thead>

					      <tbody>
					        <tr>
					          <td>Alvin A Bzxcvbnm</td>
					          <td>20XX-XXXXX</td>
					          <td>Pending</td>
					          <td>119</td>
					        </tr>
					        <tr>
					          <td>Alan C Dqwertyuiop</td>
					          <td>20XX-XXXXX</td>
					          <td>asdfghjkl</td>
					          <td>119</td>
					        </tr>
					        <tr>
					          <td>Jonathan E Fokmjnuhj</td>
					          <td>20XX-XXXXX</td>
					          <td>Pending</td>
					          <td>119</td>
					        </tr>
					      </tbody>
					    </Table>
					  </CollapsibleItem>
					  <CollapsibleItem header='Registration Advisees' icon='people'>
					    <Table striped="true">
					      <thead>
					        <tr>
					          <th data-field="name">Name</th>
					          <th data-field="studentNo">Student Number</th>
					          <th data-field="status">Status</th>
					          <th data-field="unitsEarned">Units Earned</th>
					        </tr>
					      </thead>

					      <tbody>
					        <tr>
					          <td>Alvin A Bzxcvbnm</td>
					          <td>20XX-XXXXX</td>
					          <td>Pending</td>
					          <td>119</td>
					        </tr>
					        <tr>
					          <td>Alan C Dqwertyuiop</td>
					          <td>20XX-XXXXX</td>
					          <td>asdfghjkl</td>
					          <td>119</td>
					        </tr>
					        <tr>
					          <td>Jonathan E Fokmjnuhj</td>
					          <td>20XX-XXXXX</td>
					          <td>Pending</td>
					          <td>119</td>
					        </tr>
					      </tbody>
					    </Table>
					  </CollapsibleItem>
					</Collapsible>
				</div>
			</div>
			<div className="profilePicture">
				<MediaBox src="https://static.useresponse.com/public/2026agenda/avatars/default-avatar.svg" caption="A demo media box1" width="80%"/>
			</div>
		</div>
		);
	}
}

export default HomeProfile;