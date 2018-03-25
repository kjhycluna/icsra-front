import React, { Component } from 'react';
import {SideNavItem, SideNav, Icon, Button} from 'react-materialize';
import './topNav.css';

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
				  <SideNavItem divider/>
				  <SideNavItem waves href='/adviser-advisee'>Adviser-Advisee Assignments</SideNavItem>
				  <SideNavItem waves href='/list-sched-course'>Schedules (per course)</SideNavItem>
				  <SideNavItem waves href='/curriculum'>Curriculum</SideNavItem>
				  <SideNavItem waves href='/reports'>Generate Reports</SideNavItem>
				  <SideNavItem waves href='#'>Add User</SideNavItem>
				  <SideNavItem waves href='#'>Edit User</SideNavItem>
				  <SideNavItem divider/>
				  <SideNavItem waves href='/'>Logout</SideNavItem>
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