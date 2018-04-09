import React, { Component } from 'react';
import {Dropdown, NavItem, Icon, Button, Table, MediaBox, CollapsibleItem, Collapsible} from 'react-materialize';
import {Parallax} from 'react-parallax';
import './css/HomeProfile.css';
import TopNav from './TopNavProf';
import ChangePassword from './ChangePassword';
import AddConsultationHours from './AddConsultationHours';
import bg from './images/bg.jpg';

var autoBind = require('auto-bind');
const schedule = [
					{course:"IT 1",section:"A",time:"7:00-8:00",venue:"ICSLH 3"},
					{course:"IT 2",section:"B",time:"7:00-8:00",venue:"ICSLH 4"},
					{course:"IT 3",section:"C",time:"7:00-8:00",venue:"ICSMH"},
				]


class HomeProfile extends Component {
	constructor(props){
		super(props)
		this.state = {
			firstName:"Reginald",
			lastName:"Recario",
			empno:"000000000",
			rank:"Jellybean Lollipop",
			status:"Single",
			teachingLoad:schedule.length*3,
			studyLoad:"0"
		}
		autoBind(this);
	}

	render() {
	    return (
		<div>
            <TopNav/>

            <div >
            	<Parallax bgImage={bg} strength={200}>
            		<div style={{ height: '400px', width:'100%'}}>
            			<div className="name">
            				FIRST M. LASTNAME 
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
			<div className="homeFeed">
				<div className="side">
					<br />
					<div>
						<Table bordered="false">
						  <tbody>
						    <tr>
						      <td>Employee No.:</td>
						      <td>{this.state.empno}</td>
						    </tr>
						    <tr>
						      <td>Rank:</td>
						      <td>{this.state.rank}</td>
						    </tr>
						    <tr>
						      <td>Status:</td>
						      <td>{this.state.status}</td>
						    </tr>
						    <tr>
						      <td>Teaching Load:</td>
						      <td>{this.state.teachingLoad} unit/s</td>
						    </tr>
						    <tr>
						      <td>Study Load:</td>
						      <td>{this.state.studyLoad} unit/s</td>
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
					      <th data-field="course">Course</th>
					      <th data-field="section">Section</th>
					      <th data-field="time">Day and Time</th>
					      <th data-field="room">Room</th>
					    </tr>
					  </thead>

					  <tbody>
					  	{schedule.map((item,index)=>{
					  		return(
					  			<tr key={index}>
					  				<td>{item.course}</td>
					      			<td>{item.section}</td>
					      			<td>{item.time}</td>
					      			<td>{item.venue}</td>
					  			</tr>
					  		)
					  	})}
					  </tbody>
					</Table>

					<div className="add">
						<AddConsultationHours/>
					</div>

					<br /> <br /> <br />
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