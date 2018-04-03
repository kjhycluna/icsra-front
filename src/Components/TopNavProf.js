import React, { Component } from 'react';
import {SideNavItem, SideNav, Icon, Button} from 'react-materialize';
import './topNav.css';

class TopNavProf extends Component {
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
				  <SideNavItem waves href='/home/swap'>Swap Schedule Request</SideNavItem>
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

export default TopNavProf;