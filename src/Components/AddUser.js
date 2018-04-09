import React, { Component } from 'react';
import {Row, Input, Button} from 'react-materialize';
import TopNav from './TopNav';
import './css/Login.css';
import './css/HomeProfile.css';
import './css/AddUser.css';

const autoBind = require('auto-bind');

class AddUser extends Component {
	constructor(props){
		super(props)
		this.state = {
			fname: "",
			lname: "",
			status: "",
			rank: "",
			email:"",
			committee: false,
			password:"",
			cpassword:""
		}
		autoBind(this);
		this.updateFName = this.updateFName.bind(this);
		this.updateLName = this.updateLName.bind(this);
		this.updateStatus = this.updateStatus.bind(this);
		this.updateRank = this.updateRank.bind(this);
		this.updateEmail = this.updateEmail.bind(this);
		this.updateCommittee = this.updateCommittee.bind(this);
		this.updatePassword = this.updatePassword.bind(this);
		this.updateCPassword = this.updateCPassword.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	updateEmail(event){
		this.setState({email : event.target.value})
	}
	updatePassword(event){
		this.setState({password : event.target.value})
	}
	updateCPassword(event){
		this.setState({cpassword : event.target.value})
	}
	updateFName(event){
		this.setState({fname : event.target.value})
	}
	updateLName(event){
		this.setState({lname : event.target.value})
	}
	updateStatus(event){
		this.setState({status : event.target.value})
	}
	updateRank(event){
		this.setState({rank : event.target.value})
	}
	updateCommittee(event){
		this.setState({committee : !this.state.committee})
	}

	handleSubmit(event){
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
							<Input type="text" label="First Name" s={12} onChange={this.updateFName} />
							<Input type="text" label="Last Name" s={12} onChange={this.updateLName} />
							<Input type="text" label="Status" s={12} onChange={this.updateStatus} />
							<Input type="text" label="Rank" s={12} onChange={this.updateRank} />
							<Input type="email" label="Email" s={12} onChange={this.updateEmail} />
							<Input type="checkbox" label="Committee Member?" s={12} onChange={this.updateCommittee} />
							<Input type="password" label="Password" s={12} onChange={this.updatePassword} />
							<Input type="password" label="Confirm Password" s={12} onChange={this.updateCPassword} />
						</Row>

						<div className="center">
							<Button waves='light' onClick={this.state.handleSubmit}>
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