import React, { Component } from 'react';
import {Table, Button} from 'react-materialize';
import './AdviserAdvisee.css';
import TopNav from './TopNav';
import {assignment} from './adviser-advisee.js'; //the adviser-advisee data (array of objects with adviser and advisee[] attributes)
import AdvAssignmentCreate from './AdvAssignmentCreate';
import AdvAssignmentUpdate from './AdvAssignmentUpdate';

// const autoBind = require('auto-bind');



class AdviserAdvisee extends Component {
	constructor(props){
		super(props)
		this.state = { //mostly attributes of student (for sidebar)
			advisee: "",
			studno: "20XX-XXXXX",
			email: "student@up.edu.ph",

			units: 0,
			adviser: "",
			prev_adv: []
		}
		// autoBind(this);
	}

	clickStudent(student, adviser, e){ //handler for when student is clicked, the state will change values, thus changing the sidebar values
		this.setState({advisee: student});
		this.setState({adviser: adviser});
	}
	previousAdvisers(){
		
	}

	createTable(){ //function that creates tables of adviser - # of advisees - advisees[], if the adviser has no current advisees, he/she is not included
		var table = [];
		for(var i=0; i<assignment.length; i++){

			// if(assignment[i].advisees.length > 0){
				table.push(<tr> 
					<td className="advisers">{assignment[i].adviser}</td>
					<td className="advisers">{assignment[i].advisees.length}</td>
					<td className="tdStyle">{this.createAdvisees(assignment[i])}</td>
					</tr>);
			// }
		}
		return table;
	}

	createAdvisees(adviser){ //creates the list of advisees given the adviser (used for createTable() function)
		var adv = [];
		for(var i=0; i<adviser.advisees.length; i++){
			adv.push(<a href="#" onClick={this.clickStudent.bind(this, adviser.advisees[i], adviser.adviser)}>{adviser.advisees[i]}</a>)
			if(i !== adviser.advisees.length -1) {adv.push('\n')}
		}
		return adv;
	}

	render() {
	    return (
		<div>
            <TopNav/>

        	{/*middle table*/}
            <div className="listaa">
            	<Table>
            		<tbody>
            			<tr>
            				<td className="classification">Adviser</td>
            				<td className="classification">No. of Advisees</td>
            				<td className="classification">Advisees</td>
            			</tr>
            			{this.createTable()} 
            		</tbody>
            	</Table>
            </div>

            {/*sidebar*/}
            <div className="sideStudent">
            	<Table>
            		<tbody>
            			<tr>
            				<td className="tdStyle"> Name </td>
            				<td className="tdStyle"> {this.state.advisee} </td>
            			</tr>
            			<tr>
            				<td className="tdStyle"> Student Number </td>
            				<td className="tdStyle"> {this.state.studno} </td>
            			</tr>
            			<tr>
            				<td className="tdStyle"> Email </td>
            				<td className="tdStyle"> {this.state.email} </td>
            			</tr>
            			<tr>
            				<td className="tdStyle"> Units Earned </td>
            				<td className="tdStyle"> {this.state.units} </td>
            			</tr>
            			<tr>
            				<td className="tdStyle"> Adviser </td>
            				<td className="tdStyle"> {this.state.adviser} </td>
            			</tr>
            			<tr>
            				<td className="tdStyle"> Previous Advisers </td>
            				<td> {this.previousAdvisers()} </td>
            			</tr>
            		</tbody>
            	</Table>
            	<div className="functions">
				<AdvAssignmentCreate/><br />
				<AdvAssignmentUpdate/><br />
				<Button waves='light'>Delete a Student's Adviser</Button>
			</div>
            </div>

		</div>
		);
	}
}

export default AdviserAdvisee;