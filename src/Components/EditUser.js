import React, { Component } from 'react';
import {Row, Input, Button, Table, Modal} from 'react-materialize';
import TopNav from './TopNav';
import './css/Login.css';
import './css/HomeProfile.css';
import './css/AddUser.css';
import './css/AdviserAdvisee.css';
import axios from 'axios';

const autoBind = require('auto-bind');

class EditUser extends Component {
	constructor(props){
		super(props)
		this.state = {
			empno: "",
			status: "",
			rank: "",
			email:"",
			committee: false,
			password:"",
			cpassword:"",
			rows:[],
			fields:["Employee No.", "First Name", "Last Name", "Status"],
			filter:"Employee No.",
			selectedEmpNo: 0,
			input:'',
			view_all: false
		}
		// autoBind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleViewAll = this.handleViewAll.bind(this);
	}
	refresh(){
		return axios.get('faculty/view-all')
	}

	componentDidMount(){
		this.refresh().then((response)=>{
			var val=response.data.data
			this.setState({rows:val})
		})
		this.setState({rows:[]})
	}

	handleChange(e) {
		let change={};
		change[e.target.name] = e.target.value;
		this.setState(change);
		this.setState({view_all: false});
	}

	handleViewAll(event){
		this.setState({view_all: true})
	}

	handleSubmit(empno) {
		axios.post(
			'faculty/edit-faculty',
			{
	      fname: this.state.fname,
	      lname: this.state.lname,
	      status: this.state.status,
	      rank: this.state.rank,
	      study_load: this.state.study_load,
	      place_of_study: this.state.place_of_study,
	      committee_member: ""+this.state.committee_member,
	      position:  this.state.position,
	      empno: this.state.empno
			},
			(error, response, body) => {
					console.log(body);
			});
		if(this.state.password!=='') {
			axios.post(
				'faculty/edit-password',
				{
		      empno: this.state.empno,
		      password: this.state.password
				},
				(error, response, body) => {
						console.log(body);
				});
		}
		window.Materialize.toast("Edited",3000);
}

	createTable() { 
		var table = [];
		if(!this.state.view_all){
			let input = this.state.input;
			let rows = this.state.rows;
			for(var i=0; i<this.state.rows.length; i++) {
				switch(this.state.filter) {
				case "Employee No.":
					if(rows[i].empno.toString()===input)
						table.push(rows[i])
					break;
				case "First Name":
					if(rows[i].fname===input)
						table.push(rows[i])
					break;
				case "Last Name":
					if(rows[i].lname===input)
						table.push(rows[i])
					break;
				case "Status":
					if(rows[i].lname===input)
						table.push(rows[i])
					break;
				}
			}
		}else table=this.state.rows;
		var table2 = [];
		if(table.length > 0){
			table2.push(<Table>
            		<tbody>
            			<tr>
            				<td >Employee No.</td>
            				<td >Name</td>
            				<td >Status</td>
            				<td >Rank</td>
            				<td >Email</td>
            				<td >Place of Study</td>
            			</tr>
            			{this.fillTable(table)} 
            		</tbody>
            	</Table>)
		}
		return table2;
	}

	fillTable(table){
		var table2 = [];
		for(var i=0; i<table.length; i++){
				table2.push(<tr> 
					<td >{table[i].empno}</td>
					<td >{table[i].fname + " " + table[i].lname}</td>
					<td >{table[i].status}</td>
					<td >{table[i].rank}</td>
					<td >{table[i].email}</td>
					<td >{table[i].place_of_study}</td>
					{this.createModal(table[i])}
					</tr>)
		}
		return table2;
	}

	createModal(user){
		return (
			<td>
				<Modal id="modal1" actions={
					<div>
						<Modal header='Confirm Changes' 
						actions={
							<div>
								<div className="aCancel"><Button className="modal-action modal-close red">No</Button>
								</div>
								<div className="aSave"><Button className="modal-action modal-close blue" onClick={this.handleSubmit(user.empno)}>Yes</Button>
								</div>
							</div>
						} 
						trigger={
							<div className="aSave">
								<Button className="modal-action modal-close">Save Changes</Button>
							</div>}>

						<p>Are you sure?</p>
						</Modal>
						<div className="aCancel">
							<Button className="modal-action modal-close">Cancel</Button>
						</div>
					</div>}

						header='Edit User' trigger={<Button waves='light'>Edit</Button>}>
		  			<Row>
		  				<Input s={12} name="fname" label="First Name" defaultValue={user.fname} onChange={this.handleChange} />
		  				<Input s={12} name="lname" label="Last Name" defaultValue={user.lname} onChange={this.handleChange} />
		  				<Input s={12} name="status" type='select' label="Status" defaultValue={user.status} onChange={this.handleChange} >
								<option value='Available'>Available</option>
								<option value='Not Available'>Not Available</option>
		  				</Input>
		  				<Input s={12} name="rank" label="Rank" defaultValue={user.rank} onChange={this.handleChange}/>
		  				<Input s={12} name="email" label="Email" defaultValue={user.email} onChange={this.handleChange}/>
		  				<Input s={12} name="place_of_study" label="Place of Study" defaultValue={user.place_of_study} onChange={this.handleChange}/>
		  				<Input s={12} name="password" label="Password" type="password" placeholder="Input to change password" onChange={this.handleChange}/>
		  				<Input s={12} name="cpassword" label="Confirm Password" type="password" onChange={this.handleChange}/>
		  			</Row>
				</Modal>
			</td>
		);
	}

	render() {
	    return (
		<div>
			<TopNav />

			<div className="feed">
				<div className="center">
					<br />
					<div className="addUser-Title">
						View Users
					</div>
					<div className="inputs-addUser">
						<Row>
							Filter by: <Input s={12} name="filter" type='select' defaultValue='Employee No.' onChange={this.handleChange}>
					    {
					    	this.state.fields.map((item)=>{
					    		return(
					    			<option>{item}</option>
					    		)
					    	})
					    }
					    </Input>
							<Input name="input" type="text" label="Search" s={12} onChange={this.handleChange} />

						</Row>
							{this.createTable()}
					</div>
				</div>
			</div>

		</div>
		);
	}
}

export default EditUser;