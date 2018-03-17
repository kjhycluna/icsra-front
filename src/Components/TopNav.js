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
				  <SideNavItem header>ICSRA</SideNavItem>
				  <SideNavItem waves href='#!first'>Home</SideNavItem>
				  <SideNavItem waves href='#!second'>Course Offerings</SideNavItem>
				  <SideNavItem waves href='#!third'>Adviser-Advisee Assignments</SideNavItem>
				  <SideNavItem waves href='#!third'>Schedules</SideNavItem>
				  <SideNavItem divider/>
				  <SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem>
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