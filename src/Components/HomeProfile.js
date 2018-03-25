import React, { Component } from 'react';
import {Dropdown, NavItem, Icon, Button, Table, MediaBox, CollapsibleItem, Collapsible} from 'react-materialize';
import './HomeProfile.css';
import TopNav from './TopNav';
import ChangePassword from './ChangePassword';
import AddConsultationHours from './AddConsultationHours';

// const autoBind = require('auto-bind');

class HomeProfile extends Component {
	/*constructor(props){
		super(props)
		this.state = {
			
		}
		autoBind(this);
	}*/

	render() {
	    return (
		<div>
            <TopNav/>

			<div className="feed">
				<div>
					<div className="name">
						FIRST M. LASTNAME 
					</div>
					<div className="settingsBtn">
						<Dropdown trigger={<Button><Icon>settings</Icon></Button>}>
							<NavItem node='a' href='/edit-profile'>EditProfile</NavItem>
							<ChangePassword/>
						</Dropdown>
					</div>
				</div>
				
				<hr></hr>

				<div className="side">
					<div className="profilePicture">
						<MediaBox src="https://static.useresponse.com/public/2026agenda/avatars/default-avatar.svg" caption="A demo media box1" width="80%"/>
					</div>
					<br />
					<div>
						<Table bordered="false">
						  <tbody>
						    <tr>
						      <td>Employee No.:</td>
						      <td>000000000</td>
						    </tr>
						    <tr>
						      <td>Rank:</td>
						      <td>Jellybean Lollipop</td>
						    </tr>
						    <tr>
						      <td>Status:</td>
						      <td>Lollipop</td>
						    </tr>
						    <tr>
						      <td>Teaching Load:</td>
						      <td>%d</td>
						    </tr>
						    <tr>
						      <td>Study Load:</td>
						      <td>%d</td>
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
					    <tr>
					      <td>Alvin</td>
					      <td>Eclair</td>
					      <td>$0.87</td>
					      <td>a</td>
					    </tr>
					    <tr>
					      <td>Alan</td>
					      <td>Jellybean</td>
					      <td>$3.76</td>
					      <td>b</td>
					    </tr>
					    <tr>
					      <td>Jonathan</td>
					      <td>Lollipop</td>
					      <td>$7.00</td>
					      <td>c</td>
					    </tr>
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

		</div>
		);
	}
}

export default HomeProfile;