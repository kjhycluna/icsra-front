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
				  <SideNavItem waves href='/adviser-advisee'>Adviser-Advisee Assignments</SideNavItem>
				  <SideNavItem waves href='/list-sched'>Schedules</SideNavItem>
				  <SideNavItem divider/>
				  <SideNavItem waves href='/home/swap'>Swap Schedule</SideNavItem>
				  <SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem>
				  <SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem>
				  <SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem>
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
// <p style="color:green"><a href="/home">ICSRA</a></p>