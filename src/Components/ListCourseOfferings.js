import React, { Component } from 'react';					//default
import { Table } from 'react-materialize';	//use react-materialize.github.io
import './ListCourses.css';								//css file of your component
import TopNav from './TopNav';								//default

const courses =[
	{id: 1, course_no:"CMSC 128",section:"A",time:"TTh 8:00-9:00", room:"ICSMH", fic: "", status:"TBA",students:64},
	{id: 2, course_no:"CMSC 132",section:"ST1L",time:"T 13:00-16:00", room:"ICS PC6", fic: "", status:"TBA",students:16}
]

class ListCourseOfferings extends Component {
	render() {
		return (
			<div>
				<TopNav/>
					
				<div className="feed">
					
					<br />
					<div>
						<Table striped="true">
						  <thead>
						    <tr>
						      <th data-field="subj">Subject</th>
						      <th data-field="sec">Section</th>
						      <th data-field="dayTime">Day/Time</th>
						      <th data-field="inst">Instructor</th>
						      <th data-field="studentCount">No. of Students</th>
						    </tr>
						  </thead>

						  <tbody>
						  	{
						  		courses.map((item,index)=>{
						  			return(<tr key={index}>
						  				<td>{item.course_no}</td>
						  				<td>{item.section}</td>
						  				<td>{item.time}</td>
						  				<td>instructor x</td>
						  				<td>{item.students}</td>
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

export default ListCourseOfferings;
