import React, { Component } from 'react';
import {Table} from 'react-materialize';
import './AdviserAdvisee.css';
import TopNav from './TopNav';
import {advisees} from './advisees.js'; //the adviser-advisee data (array of objects with adviser and advisee[] attributes)

// const autoBind = require('auto-bind');



class AdviserAdviseeUser extends Component {
	constructor(props){
		super(props)
		this.state = { //mostly attributes of student (for sidebar)
			user: 'JM Bawagan'
		}
		// autoBind(this);
	}

	createTable(){ //function that creates tables of adviser - # of advisees - advisees[], if the adviser has no current advisees, he/she is not included
		var table = [];
		for(var i=0; i<advisees.length; i++){
			if(advisees[i].adviser === this.state.user){
				table.push(<tr> 
					<td>{advisees[i].studno}</td>
					<td>{advisees[i].name}</td>
					<td>{advisees[i].email}</td>
					<td>118</td>
					<td>{this.createPrevAdvisers(advisees[i])}</td>
					</tr>);
			}
		}
		return table;
	}

	createPrevAdvisers(advisee){ //creates the list of advisees given the adviser (used for createTable() function)
		var adv = [];
		for(var i=0; i<advisee.prevAdv.length; i++){
			adv.push(advisee.prevAdv[i])
			if(i !== advisee.prevAdv.length -1) {adv.push(', ')}
		}
		return adv;
	}

	render() {
	    return (
		<div>
            <TopNav/>

            <div className="feed">
            	<br /><br />
            	<Table striped="true" bordered="true">
            		<tbody>
            			<tr>
            				<th>Student Number</th>
            				<th>Name</th>
            				<th>E-mail</th>
            				<th>Units Earned</th>
            				<th>Previous Advisers</th>
            			</tr>
            			{this.createTable()} 
            		</tbody>
            	</Table>
            </div>

		</div>
		);
	}
}

export default AdviserAdviseeUser;