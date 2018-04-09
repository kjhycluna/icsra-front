import React, { Component } from 'react';
import { Row, Button, Input, Table, MediaBox, Modal, Icon } from 'react-materialize';
import NumericInput from 'react-numeric-input'; //npm install react-numeric-input --save
import TopNav from './TopNav';
import './css/EditProfile.css';

var autoBind = require('auto-bind');

//put list of ranks here
const ranks=[ "Assistant Professor", "Professor", "Instructor 1", "Instructor 2", "Instructor 3", "Instructor 4", "Assistant Instructor", "Chancellor" ];

//put list of statuses here
const statuses=[ "Active", "Onleave", "TOTGA", "It's Complicated" ];

//put list of subjects/ schedules here
const subjects=[ "CMSC 2", "CMSC 11", "CMSC 21", "CMSC 22", "CMSC 56", "CMSC 57", "CMSC 100", "CMSC 123", "CMSC 125", "CMSC 128", "CMSC 130", "CMSC 131", "CMSC 132", "CMSC 170"];

class ListItem extends Component{
	render(){
	    return(
	      <option value={this.props.key}>{this.props.itemContent}</option>
	    );
  }
}

class EditProfile extends Component {
	constructor(props){
		super(props)
		this.state = {
			firstName:"Reginald",
			lastName:"Recario",
			empno:"000000000",
			rank:"Chancellor",
			status:"It's Complicated",
			studyLoad: 0,
			schedule:[
				{course:"IT 1",section:"A",time:"7:00-8:00",venue:"ICSLH 3"},
				{course:"IT 2",section:"B",time:"7:00-8:00",venue:"ICSLH 4"},
				{course:"IT 3",section:"C",time:"7:00-8:00",venue:"ICSMH"},
			],
			teachingLoad:3.7,
			sp_advisees:[
				{name:"Alvin A",studentNo:"2010-00001",status:"Pending",units:120},
	      		{name:"Alvin A",studentNo:"2010-00001",status:"Pending",units:120},
	      		{name:"Alvin A",studentNo:"2010-00001",status:"Pending",units:120},
			],
			thesis_advisees:[
				{name:"Alvin A",studentNo:"2010-00001",status:"Pending",units:120},
	      		{name:"Alvin A",studentNo:"2010-00001",status:"Pending",units:120},
	      		{name:"Alvin A",studentNo:"2010-00001",status:"Pending",units:120},
			],
			regd_advisees:[
				{name:"Alvin A",studentNo:"2010-00001",status:"Pending",units:120},
	      		{name:"Alvin A",studentNo:"2010-00001",status:"Pending",units:120},
	      		{name:"Alvin A",studentNo:"2010-00001",status:"Pending",units:120},
			],
			pic: "https://static.useresponse.com/public/2026agenda/avatars/default-avatar.svg",
			preferrence: ["CMSC 2", "CMSC 100", "CMSC 128"]
		}
		autoBind(this);
	}

	handleRankChange(e){
		const newRank = e.target.value;
		for(var i = 0; i < ranks.length; ++i){
			if(newRank === ranks[i]){
				this.setState({ rank: newRank });
				console.log(this.state.rank);
				break;
			}
		}
	}

	handleStatusChange(e){
		const newStatus = e.target.value;
		for(var i = 0; i < statuses.length; ++i){
			if(newStatus === statuses[i]){
				this.setState({ status: newStatus });
				console.log(this.state.status);
				break;
			}
		}
	}

	handleSubject1Change(e){
		const sub1 = e.target.value;
		var newPref = this.state.preferrence;
		newPref[0] = sub1;

		this.setState( { preferrence: newPref });
		console.log(this.state.preferrence);
	}

	handleSubject2Change(e){
		const sub2 = e.target.value;
		var newPref = this.state.preferrence;
		newPref[1] = sub2;

		this.setState( { preferrence: newPref });
		console.log(this.state.preferrence);
	}

	handleSubject3Change(e){
		const sub3 = e.target.value;
		var newPref = this.state.preferrence;
		newPref[2] = sub3;

		this.setState( { preferrence: newPref });
		console.log(this.state.preferrence);
	}

	render() {
	    return (
		<div>
            <TopNav/>

			<div className="feed">
				<Row id="row0">
					<div className="input-field">
						<Input id="name" label="Name" validate defaultValue={this.state.firstName.toUpperCase() + " " + this.state.lastName.toUpperCase()} />
					</div>
					<div id="cancelBtn">
						<Button waves="light" type="cancel" node="a" href="/home"> Cancel </Button>
					</div>
				</Row>

				<div id="leftCol">
					<div id="media">
						<MediaBox id="pic" src={this.state.pic} caption="profile picture" />
						<br />
						<Modal
							header='Change Profile Picture'
							bottomSheet
							trigger={<Button> CHANGE PROFILE PICTURE </Button>}>
							<form action='#'>
								<div className="file-field input-field">
									<div className="btn">
										<span>File</span>
										<input type="file" />
									</div>
									<div className="file-path-wrapper">
										<input className="file-path validate" type="text" />
									</div>
									<span className="btn">Upload</span>
							   </div> 
							</form> 
						</Modal>
					</div>
					<br />
					<div>
						<Table id="personal" bordered="false">
						  <tbody>
						    <tr>
						      <td className="desc">Employee No.:</td>
						      <td>{this.state.empno}</td>
						    </tr>
						    <tr>
						      <td className="desc">Rank:</td>
						      <td>
						      	{
						      		<Input s={12} type='select' defaultValue={this.state.rank} onChange={this.handleRankChange}>
						      		{
						      			ranks.map((rank) => {
						      				return (
						      					<ListItem
						      						key={rank}
						      						itemContent={rank} />
						      				);
						      			})
						      		}
						      		</Input>
						      	}
							  </td>
						    </tr>
						    <tr>
						      <td className="desc">Status:</td>
						      <td>
						      	{
						      		<Input s={12} type='select' defaultValue={this.state.status} onChange={this.handleStatusChange}>
						      		{
						      			statuses.map((status) => {
						      				return (
						      					<ListItem
						      						key={status}
						      						itemContent={status} />
						      				);
						      			})
						      		}
						      		</Input>
						      	}
							  </td>
						    </tr>
						    <tr>
						      <td className="desc">Teaching Load:</td>
						      <td>{this.state.teachingLoad}</td>
						    </tr>
						    <tr>
						      <td className="desc">Study Load:</td>
						      <td><NumericInput className="form-control" mobile min={0} step={1} precision={3} value={this.state.studyLoad}/></td>
						    </tr>
						    <tr>
						    	<td>Preferred Subjects:</td>
						    	<td>
						    	{
						    		<Input type='select' defaultValue={this.state.preferrence[0]} onChange={this.handleSubject1Change}>
						    		{
						    			subjects.map((subject) => {
						    				return(
						    					<ListItem 
						    						key={subject}
						    						itemContent={subject} />
						    				);
						    			})
						    		}
						    		</Input>
						    	}
						    	</td>
						    </tr>
						    <tr>
						    	<td></td>
						    	<td>
						    	{
						    		<Input type='select' defaultValue={this.state.preferrence[1]} onChange={this.handleSubject2Change}>
						    		{
						    			subjects.map((subject) => {
						    				return(
						    					<ListItem 
						    						key={subject}
						    						itemContent={subject} />
						    				);
						    			})
						    		}
						    		</Input>
						    	}
						    	</td>
						    </tr>
						    <tr>
						    	<td></td>
						    	<td>
						    	{
						    		<Input type='select'defaultValue={this.state.preferrence[2]} onChange={this.handleSubject3Change}>
						    		{
						    			subjects.map((subject) => {
						    				return(
						    					<ListItem 
						    						key={subject}
						    						itemContent={subject} />
						    				);
						    			})
						    		}
						    		</Input>
						    	}
						    	</td>
						    </tr>
						  </tbody>
						</Table>
					</div>
					<br />
					<Modal
						header='Save Account Changes'
						bottomSheet
						trigger={<Button>Save Account Changes</Button>}>
						<div id="saveChanges">
							<form>
								Please re-enter your ICSRA password to save changes to your account.
								<Input label="Password" type="password" validate />
								<div id="s1">
								  <Button className="modal-action modal-close" type="submit" node="a" href="/home">
								  	<Icon>send</Icon>&nbsp;&nbsp;Save
								  </Button>
								</div>
								<div id="c1">
								  <Button className="modal-action modal-close" type="cancel" node="a" href="">
								  	<Icon>cancel</Icon>&nbsp;&nbsp;Cancel
								  </Button>
								</div>
							</form> 
						</div>
					</Modal>
					<br /> <br /> <br />
				</div>
				
				<div id="rightCol">
					SCHEDULE
					<Table striped={true}>
					  <thead>
					    <tr>
					      <th data-field="course">Course</th>
					      <th data-field="section">Section</th>
					      <th data-field="time">Day and Time</th>
					      <th data-field="room">Room</th>
					    </tr>
					  </thead>

					  <tbody>
					  	{this.state.schedule.map((item,index)=>{
					  		return(
					  			<tr key={index}>
					  				<td>{item.course}</td>
					      			<td>{item.section}</td>
					      			<td>{item.time}</td>
					      			<td>{item.venue}</td>
					  			</tr>
					  		)
					  	})}
					  </tbody>
					</Table>

					<div className="add">
						<Button disabled waves='light'>Add Consultation Hours</Button>
					</div>

					<br /> <br /> <br />
					
					<div>
					  ADVISEES
					  <ul className="collapsible">
					    <li>
					      <div className="collapsible-header"><i className="material-icons">person</i>SP Advisees</div>
					    </li>
					    <li>
					      <div className="collapsible-header"><i className="material-icons">person</i>Thesis Advisees</div>
					    </li>
					    <li>
					      <div className="collapsible-header"><i className="material-icons">people</i>Registration Advisees</div>
					    </li>
					  </ul>
        			</div>
				</div>
			</div>

		</div>
		);
	}
}

export default EditProfile;