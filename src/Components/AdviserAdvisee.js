import React, { Component } from 'react';
import {Table, Row, Input} from 'react-materialize';
import './css/AdviserAdvisee.css';
import TopNav from './TopNav';
import {adv} from './adviser-advisee.js'; //the adviser-advisee data (array of objects with adviser and advisee[] attributes)
import AdvAssignmentCreate from './AdvAssignmentCreate';
import AdvAssignmentUpdate from './AdvAssignmentUpdate';
import AdvAssignmentDelete from './AdvAssignmentDelete';

// const autoBind = require('auto-bind');

var adv1 = [];

class AdviserAdvisee extends Component {
	constructor(props){
		super(props)
		this.state = { //mostly attributes of student (for sidebar)
			advisee: "",
			studno: "20XX-XXXXX",
			email: "student@up.edu.ph",
			units: 0,
			adviser: "nul",
			prev_adv: []
		}
		// autoBind(this);
		this.changeAdviser = this.changeAdviser.bind(this);
	}

	clickStudent(student, e){ //handler for when student is clicked, the state will change values, thus changing the sidebar values
		this.setState({advisee: student});
		
	}
	changeAdviser(e){
		this.setState({adviser: e.target.value});
	}

	createTable(){ //function that creates tables of adviser - # of advisees - advisees[], if the adviser has no current advisees, he/she is not included
		var table = [];
		var regAdv = [];
		var spAdv = [];
		var thesisAdv = [];
		for(var i=0; i<adv.length; i++){
			if(adv[i].registration_adviser === this.state.adviser) regAdv.push(adv[i].fname + ' ' + adv[i].lname);
			if(adv[i].sp_adviser === this.state.adviser) spAdv.push(adv[i].fname + ' ' + adv[i].lname);
			if(adv[i].thesis_adviser === this.state.adviser) thesisAdv.push(adv[i].fname + ' ' + adv[i].lname);
		}
		
		table.push(<tr>
			<td className="advisers">{regAdv.length + spAdv.length + thesisAdv.length}</td>
			<td className="tdStyle">{this.createAdvisees(regAdv)}</td>
			<td className="tdStyle">{this.createAdvisees(spAdv)}</td>
			<td className="tdStyle">{this.createAdvisees(thesisAdv)}</td>
			</tr>);
		return table;
	}

	createAdvisees(advisees){ //creates the list of advisees given the adviser (used for createTable() function)
		var advtbl = [];
		if(advisees.length > 0){
			for(var i=0; i<advisees.length; i++){
				advtbl.push(<a href="#" onClick={this.clickStudent.bind(this, advisees[i])}>{advisees[i]}</a>)
				if(i !== advisees.length -1) {advtbl.push('\n')}
			}
		}
		return advtbl;
	}

	createOptions(){
		for(var i=0; i<adv.length; i++){
			if(!adv1.includes(adv[i].registration_adviser) && adv[i].registration_adviser !== '') adv1.push(adv[i].registration_adviser);
			if(!adv1.includes(adv[i].sp_adviser) && adv[i].sp_adviser !== '') adv1.push(adv[i].sp_adviser);
			if(!adv1.includes(adv[i].thesis_adviser) && adv[i].thesis_adviser !== '') adv1.push(adv[i].thesis_adviser);
		}

		var options = [];
		for (i=0; i<adv1.length; i++){
			options.push(
				<option value={adv1[i]}> {adv1[i]} </option>
			)
		}
		return options;
	}

	render() {
	    return (
		<div>
            <TopNav/>

        	{/*middle table*/}
            <div className="listaa">
            	<Row>
	  				<Input s={12} type='select' label="Advisers" defaultValue='0' onChange={this.changeAdviser}>
						{this.createOptions()}
	  				</Input>
	  			</Row>
            	<Table>
            		<tbody>
            			<tr>
            				<td className="classification">No. of Advisees</td>
            				<td className="classification">Registration Advisees</td>
            				<td className="classification">SP Advisees</td>
            				<td className="classification">Thesis Advisees</td>
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
            				<td>  </td>
            			</tr>
            		</tbody>
            	</Table>
            	<div className="functions">
					<AdvAssignmentCreate/><br />
					<AdvAssignmentUpdate/><br />
					<AdvAssignmentDelete/><br />
				</div>
            </div>

		</div>
		);
	}
}

export default AdviserAdvisee;