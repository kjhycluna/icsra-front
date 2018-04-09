import React, { Component } from 'react';
import {Row, Input, Button} from 'react-materialize';
import TopNav from './TopNav';
import './css/Login.css';
import './css/HomeProfile.css';
import './css/AddUser.css';
import axios from 'axios'

const request = require('request');
const autoBind = require('auto-bind');

class AddUser extends Component {
	constructor(props){
		super(props)
		this.state = {
			empno:"",
			email:"",
			password:"",
			cpassword:"",
			fname: "",
			lname: "",
			status: "Available",
			rank: "",
			teaching_load: 0,
			study_load: 0,
			place_of_study: "",
			committee_member: false,
			position: ""
		}
		autoBind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		let change={};
		change[e.target.name] = e.target.value;
		this.setState(change);
	}

	updateCommittee(event){
		this.setState({committee : !this.state.committee})
	}

	handleSubmit(event){
		console.log(this.state);
		axios.post(
			'faculty/add-faculty',
			{
				empno: this.state.empno,
				email: this.state.email,
	      password: this.state.password,
	      fname: this.state.fname,
	      lname: this.state.lname,
	      status: this.state.status,
	      rank: this.state.rank,
	      teaching_load: this.state.teaching_load,
	      study_load: this.state.study_load,
	      place_of_study: this.state.place_of_study,
	      committee_member: ""+this.state.committee_member,
	      position:  this.state.position
			},
			(error, response, body) => {
					console.log(body);
			});

		window.location = '/home';	//should have authentication before this
	}

	render() {
	    return (
		<div>
			<TopNav />

			<div className="feed">
				<div className="center">
					<br />
					<div className="addUser-Title">
						Add User
					</div>
					<div className="inputs-addUser">
						<Row>
							<Input name="empno" type="text" label="Employee No." s={12} onChange={this.handleChange} />
							<Input name="fname" type="text" label="First Name" s={12} onChange={this.handleChange} />
							<Input name="lname" type="text" label="Last Name" s={12} onChange={this.handleChange} />
							<Input name="status" type="select" label="Status" s={12} onChange={this.handleChange}>
								<option value='Available'>Available</option>
								<option value='Not Available'>Not Available</option>
							</Input>
							<Input name="rank" type="text" label="Rank" s={12} onChange={this.handleChange} />
							<Input name="email" type="email" label="Email" s={12} onChange={this.handleChange} />
							<Input name="teaching_load" type="number" label="Teaching Load" s={12} onChange={this.handleChange} />
							<Input name="study_load" type="number" label="Study Load" s={12} onChange={this.handleChange} />
							<Input name="place_of_study" type="Text" label="Place of Study" s={12} onChange={this.handleChange} />
							<Input name="committee_member" type="checkbox" label="Committee Member?" s={12} onChange={this.updateCommittee} />
							<Input name="position" type="text" label="Position" s={12} onChange={this.handleChange} />
							<Input name="password" type="password" label="Password" s={12} onChange={this.handleChange} />
							<Input name="cpassword" type="password" label="Confirm Password" s={12} onChange={this.handleChange} />
						</Row>

						<div className="center">
							<Button waves='light' onClick={this.handleSubmit}>
								CONFIRM
							</Button>
						</div>
					</div>
				</div>
			</div>

		</div>
		);
	}
}

export default AddUser;
//Line 49: <Button waves='light' onClick={this.handleSubmit()}>