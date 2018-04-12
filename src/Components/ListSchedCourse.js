import React, { Component } from 'react';					//default
import { Table, Icon, Button, Modal, Input } from 'react-materialize';	//use react-materialize.github.io
import './css/ListCourses.css';								//css file of your component
import TopNav from './TopNav';								//default
import ConfirmUpdate from './ConfirmUpdate';

const autoBind = require('auto-bind');

var courses = [
	{course_no: 2, title: "Introduction to the Internet", description: "Tools and services of the Internet, Internet protocols, search engines, file transfer protocol (FTP), email, listservers and HTML programming"},
	// {course_no: 11, title: "Introduction to Computer Science", description: "Introduction to the major areas of computer science; software systems and methodology; computer theory; computer organization and architecture."},
	{course_no: 128, title: "Introduction to Software Engineering", description: "Principles and methods for the design, implementation, validation, evaluation and maintenance of software systems."},
	{course_no: 21, title: "Fundamentals of Programming", description: "Expansion and development of materials introduced in CMSC 11; processing files and linked-lists; programming in the C language; recursion; systematic program development; top-down design and program verification."}
]

const schedules = [
	{section: "a", course_no: 128, room: "ICSMH", day: "WF", start_time: "7:00", end_time: "8:00", current_no_of_students: 105, max_no_of_students: 128, status: "Available"},
	{section: "a-2l", course_no: 128, room: "ICS PC4", day: "T", start_time: "4:00", end_time: "7:00", current_no_of_students: 17, max_no_of_students: 20, status: "Available"},
	{section: "a-6l", course_no: 128, room: "ICS PC5", day: "W", start_time: "10:00", end_time: "1:00", current_no_of_students: 15, max_no_of_students: 20, status: "Available"},
	{section: "b", course_no: 2, room: "ICSMH", day: "TTH", start_time: "3:00", end_time: "4:00", current_no_of_students: 100, max_no_of_students: 100, status: "Available"},
	{section: "b-1l", course_no: 2, room: "ICS PC6", day: "F", start_time: "7:00", end_time: "10:00", current_no_of_students: 10, max_no_of_students: 15, status: "Available"},
	{section: "b-4l", course_no: 2, room: "ICS PC8", day: "TH", start_time: "1:00", end_time: "4:00", current_no_of_students: 19, max_no_of_students: 20, status: "Available"},
	{section: "b-9l", course_no: 2, room: "ICS PC9", day: "TH", start_time: "4:00", end_time: "7:00", current_no_of_students: 2, max_no_of_students: 20, status: "Dissolved"},
]

const rooms = ["ICSMH", "ICSLH3", "ICSLH4", "ICS PC1", "ICS PC2", "ICS PC3"];
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
				<Modal header='Confirm Delete' actions={<div>
					<div className="aSave"><Button className="modal-action modal-close blue" onClick={this.handleYes}>Yes</Button></div>
					<div className="aCancel"><Button className="modal-action modal-close red">No</Button></div>
					</div>
				} trigger={<Button waves='light'><Icon center>delete</Icon></Button>}>
				Are you sure?
				</Modal>
			</div>
		);
	}
}

class ListSchedCourse extends Component {
	constructor(){
		super()
		autoBind(this)
	}

	listSections(course){
		var sections = [];
		for(var i = 0; i < schedules.length; ++i){
			if(course.course_no === schedules[i].course_no){
				sections.push(
					<tr key={schedules[i].section}>
					<td>{schedules[i].section.toUpperCase()}</td>
					<td>{schedules[i].day + " " + schedules[i].start_time + " " + schedules[i].end_time}</td>
					<td>{schedules[i].room}</td>
					<td>{schedules[i].current_no_of_students}</td>
					<td>{schedules[i].status}</td>
					<td><Edit item={schedules[i]} /></td>
					<td><Delete item={schedules[i]} /></td>
					</tr>
				);
			}
		}
		return sections;
	}
	render() {
		return (
			<div>
				<TopNav/>
					
				<div className="feed">
					
					<br />
					<div>
						{
							courses.map((course, index) => {
								return(
									<div>
										<h1> CMSC {course.course_no} </h1>
										<Table className="courseTables">
					  						<thead>
					    						<tr>
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
											  	{this.listSections(course)}
											</tbody>
										</Table>
									</div>
								)
							})
						}
						
					</div>

				</div>
			</div>
		);
	}
}

export default ListSchedCourse;
