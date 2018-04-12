import React, { Component } from 'react';
import {Dropdown, NavItem, Icon, Button, Table, MediaBox, CollapsibleItem, Collapsible} from 'react-materialize';
import {Parallax} from 'react-parallax';
import './css/HomeProfile.css';
import TopNav from './TopNavProf';
import ChangePassword from './ChangePassword';
import AddConsultationHours from './AddConsultationHours';
import bg from './images/bg.jpg';
import axios from 'axios';

var autoBind = require('auto-bind');
const schedule = [
					{course:"IT 1",section:"A",time:"7:00-8:00",venue:"ICSLH 3"},
					{course:"IT 2",section:"B",time:"7:00-8:00",venue:"ICSLH 4"},
					{course:"IT 3",section:"C",time:"7:00-8:00",venue:"ICSMH"},
				]


class HomeProfProfile extends Component {
	constructor(props){
		super(props)
		this.state = {
			empno:1,
			advisees: [],
			faculty: {} 
		}
		autoBind(this);
	}
	refresh(){
		return axios.post(
			'advisee/view-advisee-by-faculty',
			{
				empno: this.state.empno
			},
			(error, response, body) => {
					console.log(body);
			})
	}
	refresh2(){
		return axios.post(
			'faculty/view-faculty',
			{
				empno: this.state.empno
			},
			(error, response, body) => {
					console.log(body);
			})
	}
	componentDidMount(){
		this.refresh().then((response)=>{
			var val=response.data.data
			this.setState({advisees:val})
		})
		this.setState({advisees:[]})
		
		this.refresh2().then((response)=>{
			var val2=response.data.data
			this.setState({faculty:val2})
		})
		this.setState({faculty:{}})

	}
	createAdvisees(index){
		
		return(
			<Table striped="true">
	      <thead>
	        <tr>
	          <th data-field="name">Name</th>
	          <th data-field="studentNo">Student Number</th>
	          <th data-field="unitsEarned">Units Earned</th>
	        </tr>
	      </thead>

	      <tbody>
	        {this.fillAdvisees(index)}
	        
	      </tbody>
	    </Table>)
	}
	fillAdvisees(index){
			var table = []
			if(this.state.advisees[index]!==undefined){
				let adv = this.state.advisees[index]
				for(var i=0; i<adv.length; i++){
					table.push(<tr>
		          <td>{adv[i].fname} {adv[i].lname}</td>
		          <td>{adv[i].studno}</td>
		          <td>{adv[i].unitsearned}</td>
		        </tr>)
				}
			}
			return table
	}
	

	render() {
	    return (
		<div>
            <TopNav/>
            
            <div >
            	<Parallax bgImage={bg} strength={200}>
            		<div style={{ height: '400px', width:'100%'}}>
            			<div className="name">
            				{this.state.faculty.fname} {this.state.faculty.lname}  
            			</div>
            		</div>
            	</Parallax>
            </div>
            <div className="settingsBtn">
            	<Dropdown trigger={<Button><Icon>settings</Icon></Button>}>
            		<NavItem node='a' href='/edit-profile'>EditProfile</NavItem>
            		<ChangePassword/>
            	</Dropdown>
            </div>
			<div className="homeFeed">
				<div className="side">
					<br />
					<div>
						<Table bordered="false">
						  <tbody>
						    <tr>
						      <td>Employee No.:</td>
						      <td>{this.state.empno}</td>
						    </tr>
						    <tr>
						      <td>Rank:</td>
						      <td>{this.state.faculty.rank}</td>
						    </tr>
						    <tr>
						      <td>Status:</td>
						      <td>{this.state.faculty.status}</td>
						    </tr>
						    <tr>
						      <td>Teaching Load:</td>
						      <td>{this.state.faculty.teaching_load} unit/s</td>
						    </tr>
						    <tr>
						      <td>Study Load:</td>
						      <td>{this.state.faculty.study_load} unit/s</td>
						    </tr>
						  </tbody>
						</Table>
					</div>
				</div>
				
				<div className="tableFeed">
					SCHEDULE
					<Table striped="true">
					  <thead>
					    <tr>
					      <th data-field="course">Course</th>
					      <th data-field="section">Section</th>
					      <th data-field="time">Day and Time</th>
					      <th data-field="room">Room</th>
					    </tr>
					  </thead>

					  <tbody>
					  	{schedule.map((item,index)=>{
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
						<AddConsultationHours/>
					</div>

					<br /> <br /> <br />
					ADVISEES
					<Collapsible accordion>
					  <CollapsibleItem header='SP Advisees' icon='person'>
					    {this.createAdvisees(2)}
					  </CollapsibleItem>
					  <CollapsibleItem header='Thesis Advisees' icon='person'>
					    {this.createAdvisees(3)}
					  </CollapsibleItem>
					  <CollapsibleItem header='Registration Advisees' icon='people'>
					    {this.createAdvisees(0)}
					  </CollapsibleItem>
					  <CollapsibleItem header='Practicum Advisees' icon='people'>
					    {this.createAdvisees(1)}
					  </CollapsibleItem>
					</Collapsible>
				</div>
			</div>
			<div className="profilePicture">
				<MediaBox src="https://static.useresponse.com/public/2026agenda/avatars/default-avatar.svg" caption="A demo media box1" width="80%"/>
			</div>
		</div>
		);
	}
}

export default HomeProfProfile;