import React, { Component } from 'react';
import {Dropdown, NavItem, Icon, Button, Table, MediaBox} from 'react-materialize';
import './HomeProfile.css';
import TopNav from './TopNav';

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
							<NavItem>Edit Profile</NavItem>
							<NavItem>Privacy Settings</NavItem>
						</Dropdown>
					</div>
				</div>
				
				<hr></hr>

				<div className="sideBar">
					<div className="profilePicture">
						<MediaBox src="https://static.useresponse.com/public/2026agenda/avatars/default-avatar.svg" caption="A demo media box1" width="80%"/>
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
					<br />
					ADVISEES
					<Table striped="true">
					  <thead>
					    <tr>
					      <th data-field="name">Name</th>
					      <th data-field="col2">asdf</th>
					      <th data-field="col3">asdf</th>
					    </tr>
					  </thead>

					  <tbody>
					    <tr>
					      <td>Alvin</td>
					      <td>Eclair</td>
					      <td>$0.87</td>
					    </tr>
					    <tr>
					      <td>Alan</td>
					      <td>Jellybean</td>
					      <td>$3.76</td>
					    </tr>
					    <tr>
					      <td>Jonathan</td>
					      <td>Lollipop</td>
					      <td>$7.00</td>
					    </tr>
					  </tbody>
					</Table>
				</div>
			</div>

		</div>
		);
	}
}

export default HomeProfile;