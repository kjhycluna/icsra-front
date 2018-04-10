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
			status: "",
			rank: "",
			email:"",
			committee: false,
			password:"",
			cpassword:"",
			rows:[],
			fields:["Employee No.", "First Name", "Last Name"],
			filter:"Employee No.",
			selectedEmpNo: 0,
			input:'',
			view_all: true
		}
		autoBind(this);
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

	// updateEmail(event){
	// 	this.setState({email : event.target.value})
	// }
	// updatePassword(event){
	// 	this.setState({password : event.target.value})
	// }
	// updateCPassword(event){
	// 	this.setState({cpassword : event.target.value})
	// }
	// updateStatus(event){
	// 	this.setState({status : event.target.value})
	// }
	// updateRank(event){
	// 	this.setState({rank : event.target.value})
	// }
	// updateCommittee(event){
	// 	this.setState({committee : !this.state.committee})
	// }

	handleViewAll(event){
		this.setState({view_all: true})
	}

	createTable(){ //function that creates tables of adviser - # of advisees - advisees[], if the adviser has no current advisees, he/she is not included
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
			// if(assignment[i].advisees.length > 0){
				table2.push(<tr> 
					<td >{table[i].empno}</td>
					<td >{table[i].fname + " " + table[i].lname}</td>
					<td >{table[i].status}</td>
					<td >{table[i].rank}</td>
					<td >{table[i].email}</td>
					<td >{table[i].place_of_study}</td>
					{this.createModal(table[i])}
					</tr>);
			// }
		}
		return table2;
	}

	createModal(user){
		
		return (
		<td>

		<Modal id="modal1" actions={<div>
									<Modal header='Confirm Changes' actions={
										<div>
											<div className="aCancel"><Button className="modal-action modal-close red">No</Button>
											</div>
											<div className="aSave"><Button className="modal-action modal-close blue" onClick={this.handleYes}>Yes</Button>
											</div>
										</div>} 
									trigger={<div className="aSave"><Button className="modal-action modal-close">Save Changes</Button></div>}>
									<p>Are you sure?</p>
									</Modal>
									<div className="aCancel"><Button className="modal-action modal-close">Cancel</Button></div></div>} 
		header='Edit User' trigger={<Button waves='light'>Edit</Button>}>
  			<Row>
  				<Input s={12} label="First Name" defaultValue={user.fname}/>
  				<Input s={12} label="Last Name" defaultValue={user.lname}/>
  				<Input s={12} type='select' label="Status" defaultValue={user.status}>
						<option value='Available'>Available</option>
						<option value='Not Available'>Not Available</option>
  				</Input>
  				<Input s={12} label="Rank" defaultValue={user.rank}/>
  				<Input s={12} label="Email" defaultValue={user.email}/>
  				<Input s={12} label="Place of Study" defaultValue={user.place_of_study}/>
  				<Input s={12} label="Password" type="password" defaultValue='12345678'/>
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
							<Button waves='light' onClick={this.state.handleViewAll}>
								View All
							</Button>

							{this.createTable()}
						</Row>
					</div>
				</div>
			</div>

		</div>
		);
	}
}

export default EditUser;
//Line 49: <Button waves='light' onClick={this.handleSubmit()}>