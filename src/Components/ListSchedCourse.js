import React, { Component } from 'react';					//default
import { Table, Icon, Button, Modal, Input } from 'react-materialize';	//use react-materialize.github.io
import './css/ListCourses.css';								//css file of your component
import TopNav from './TopNav';								//default
import ConfirmUpdate from './ConfirmUpdate';

const autoBind = require('auto-bind');
const courses =[
	{id: 1, course_no:"CMSC 128",section:"A",time:"TTh 8:00-9:00", room:"ICSMH", fic: "", status:"TBA",students:64},
	{id: 2, course_no:"CMSC 132",section:"ST1L",time:"T 13:00-16:00", room:"ICS PC6", fic: "", status:"TBA",students:16}
]
const rooms = ["ICSLH3", "ICSLH4", "ICS PC6", "ICS PC4", "ICSMH"]
const dayAndTimeSet = ["WF 7:00-9:00", "TTh 13:00-14:00", "M 13:00-16:00", "TTh 8:00-9:00", "T 13:00-16:00"]
const fic = ["Me", "You", ""]

class ListItem extends Component{
	render(){
	    return(
	      <option value={(this.props.key)}>{this.props.itemContent}</option>
	    );
  }
}

class ListSubjects extends Component{
	render(){

	    return(
	      <Input s={12} type='select' defaultValue={this.props}>
		        {
		        	courses.map((course) => {
		        		return (
		        			<ListItem key={course.id}
		        					  itemContent={course.course_no} 
		        			/>
		        		);
		        	})
		        }
		  </Input>
	    );
	}
}

class ListSections extends Component{
	render(){
		const { def: defVal } = this.props;

		return(
			<Input s={12} type='select' defaultValue={defVal}>
		        {
					courses.map((course, index)=>{
						return(
							<option value={index}> {course.section} </option>
						)
					})
				}
		  	</Input>
		)
	}
}

class ListRooms extends Component{
	render(){
		const { def: defVal } = this.props;

		return(
			<Input s={12} type='select' defaultValue={defVal}>
		        {
					rooms.map((room, index)=>{
						return(
							<option value={index}> {room} </option>
						)
					})
				}
		  	</Input>
		)
	}
}

class ListDayAndTime extends Component{
	render(){
		const { def: defVal } = this.props;

		return(
			<Input s={12} type='select' defaultValue={defVal}>
		        {
					dayAndTimeSet.map((dayAndTime, index)=>{
						return(
							<option value={index}> {dayAndTime} </option>
						)
					})
				}
		  	</Input>
		)
	}
}

class ListFaculty extends Component{
	render(){
		const { def: defVal } = this.props;

		return(
			<Input s={12} type='select' defaultValue={defVal}>
		        {
					fic.map((fic, index)=>{
						return(
							<option value={index}> {fic} </option>
						)
					})
				}
		  	</Input>
		)
	}
}

class Edit extends Component{
	constructor(props){
		super(props)
		this.state = this.props.item
		autoBind(this);
	}

	showMe(){
		console.log(this.state)
	}

	render(){
		return(
			<div>
				<Modal 
					header="Edit Subject"
					trigger={
						<Button waves='light'><Icon center>edit</Icon></Button>
					}>
					
					<div>
						&emsp;&emsp;<Icon>edit</Icon> You are editing {this.state.course_no} - {this.state.section}
						<form className="editSubjectForm">
							<ListSubjects defaultValue={this.state} />
							<ListSections defaultValue={this.state} />
							<ListRooms defaultValue={this.state} />
							<ListDayAndTime defaultValue={this.state} />
							<ListFaculty defaultValue={this.state} />
								
							<br />
							<ConfirmUpdate />
							<Button id="c2" waves='light' className="modal-action modal-close">Cancel</Button>
						</form>
					</div>
				</Modal>
			</div>
		);
	}
}

class Delete extends Component{
	constructor(props){
		super(props)
		this.state = this.props.item
		autoBind(this);
	}

	handleYes(){
		var newCourses = courses;
		newCourses = newCourses.filter(item => item.course_no !== this.state.course_no && item.section !== this.state.section)
		courses = newCourses
		this.setState({state:""})
		window.Materialize.toast("Class Deleted!",3000);
		console.log(courses)
	}

	render(){
		return(
			<div>
				<Modal header='Confirm Delete' actions={<div><Button className="modal-action modal-close red">No</Button><Button className="modal-action modal-close blue" onClick={this.handleYes}>Yes</Button></div>} trigger={<Button waves='light'><Icon center>delete</Icon></Button>}>
				Are you sure?
				</Modal>
			</div>
		);
	}
}

class ListSchedCourse extends Component {
	render() {
		return (
			<div>
				<TopNav/>
					
				<div className="feed">
					
					<br />
					<div>
						<Table>
	  						<thead>
	    						<tr>
						      		<th data-field="id">Subject</th>
						      		<th data-field="name">Section</th>
						      		<th data-field="name">Day & Time</th>
						      		<th data-field="name">Room</th>
						      		<th data-field="name">No. of Students</th>
						      		<th data-field="price">Status</th>
						      		<th data-field="edit">Edit</th>
						      		<th data-field="delete">Delete</th>
						    	</tr>
						  	</thead>
						  	<tbody>
						  	{
						  		courses.map((item,index)=>{
						  			return(<tr key={index}>
						  				<td>{item.course_no}</td>
						  				<td>{item.section}</td>
						  				<td>{item.time}</td>
						  				<td>{item.room}</td>
						  				<td>{item.students}</td>
						  				<td>{item.status}</td>
						  				<td><Edit item={item}/></td>
						  				<td><Delete item={item}/></td>
						  			</tr>)
						  		})
						  	}
							</tbody>
						</Table>
					</div>

				</div>
			</div>
		);
	}
}

export default ListSchedCourse;
