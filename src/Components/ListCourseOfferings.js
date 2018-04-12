import React, { Component } from 'react';					//default
import { Table } from 'react-materialize';					//use react-materialize.github.io
import './css/ListCourses.css';								//css file of your component
import TopNav from './TopNav';
import axios from 'axios';

class ListCourseOfferings extends Component {
	constructor(props) {
		super(props)

		this.state = {
			rows: []
		};
	}
	refresh(){
		return axios.get('schedule/view-all-schedule')
	}
	componentDidMount(){
		this.refresh().then((response)=>{
			var val=response.data.data
			this.setState({rows:val})
		})
		this.setState({rows:[]})
	}

	render() {
		return (
			<div>
				<TopNav/>
					
				<div className="feed">

					<Table striped="true">
						<thead>
							<tr>
								<th data-field="courseno">Course No.</th>
								<th data-field="title">Title</th>
								<th data-field="section">Section</th>
								<th data-field="time">Day/Time</th>
								<th data-field="instructor">Instructor</th>
							</tr>
						</thead>

						<tbody>
							{
							  this.state.rows.map((item)=>{
							    return(
							      <tr>
							        <td>{item.course_no}</td>
							        <td>{item.course_no}</td>
							        <td>{item.section}</td>
							        <td>{item.day} {item.start_time}-{item.end_time}</td>
							        <td> x x </td>
							      </tr>
							    )
							  })
							}
						</tbody>
					</Table>

				</div>
			</div>
		);
	}
}

export default ListCourseOfferings;
