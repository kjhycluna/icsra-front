import React, { Component } from 'react';
import {SideNavItem, SideNav, Icon, Button, Modal} from 'react-materialize';
import './topNav.css';

class LogoutPrompt extends Component{
	render(){
		return(
			<Modal
				header='Confirm Logout' 
				actions={
					<div className="logoutPanel">
						<div className="logoutYes">
							<Button className="modal-action modal-close blue" node="a" href="/">Yes</Button>
						</div>
						<div className="logoutNo">
							<Button className="modal-action modal-close red" node="a">No</Button>
						</div>
					</div>
				} 
				trigger={<SideNavItem> Logout </SideNavItem>}>
				Are you sure?
			</Modal>
		);
	}
}


class TopNav extends Component {
	render() {
	    return (
		<div>
			<div className="topnav">
				<SideNav
				  trigger={<Button flat large floating><Icon>menu</Icon></Button>}
				  options={{ closeOnClick: true }}
				  >
				  <SideNavItem subheader>ICSRA</SideNavItem>
				  <SideNavItem waves href='/home'>Home</SideNavItem>
				  <SideNavItem waves href='/list-courses'>Course Offerings</SideNavItem>
				  <SideNavItem waves href='/list-sched-prof'>Schedules (per prof)</SideNavItem>
				  <SideNavItem waves href='/home/swap'>Swap Schedule Request</SideNavItem>
				  <SideNavItem waves href='/adviser-advisee-user'>List of Advisees</SideNavItem>
				  <SideNavItem divider/>
				  <SideNavItem waves href='/adviser-advisee'>Adviser-Advisee Assignments</SideNavItem>
				  <SideNavItem waves href='/list-sched-course'>Schedules (per course)</SideNavItem>
				  <SideNavItem waves href='/curriculum'>Curriculum</SideNavItem>
				  <SideNavItem waves href='/reports'>Generate Reports</SideNavItem>
				  <SideNavItem waves href='/add-user'>Add User</SideNavItem>
				  <SideNavItem waves href='/edit-user'>Edit User</SideNavItem>
				  <SideNavItem divider/>
				  <LogoutPrompt />
				</SideNav>
				<div className="topnavText">
					ICSRA
				</div>
			</div>
		</div>
		);
	}
}

export default TopNav;