import React, { Component } from 'react';					//default
import { Table } from 'react-materialize';	//use react-materialize.github.io
import './css/ListSchedProf.css';								//css file of your component
import TopNav from './TopNav';								//default

// const autoBind = require('auto-bind');
const courses =[
	{course_no:"CMSC 128",section:"A",time:"TTh 8:00-9:00",status:"TBA",students:64},
	{course_no:"CMSC 132",section:"ST1L",time:"T 13:00-16:00",status:"TBA",students:16}
]

class ListSchedProf extends Component {
	

	render() {
		return (
			<div>
				<TopNav/>
				<div className="feed">
					<br /><br />
					<div>
						<div className="profName">
							SURNAME, FIRST NAME MI
						</div>

						<div className="teachLoad">
							Total Teaching Load: XX
						</div>
					</div>
					<br /><br />
					<Table>
  						<thead>
    						<tr>
					      		<th data-field="subject">Subject</th>
					      		<th data-field="section">Section</th>
					      		<th data-field="day&time">Day & Time</th>
					      		<th data-field="studentCount">No. of Students</th>
					      		<th data-field="status">Status</th>
					    	</tr>
					  	</thead>
					  	<tbody>
					  	{
					  		courses.map((item,index)=>{
					  			return(<tr key={index}>
					  				<td>{item.course_no}</td>
					  				<td>{item.section}</td>
					  				<td>{item.time}</td>
					  				<td>{item.students}</td>
					  				<td>{item.status}</td>
					  			</tr>)
					  		})
					  	}
						</tbody>
					</Table>
				</div>
			</div>
		);
	}
}

export default ListSchedProf;