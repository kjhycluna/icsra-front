import React, { Component } from 'react';					//default
import { Table } from 'react-materialize';	//use react-materialize.github.io
import './ListCourses.css';								//css file of your component
import TopNav from './TopNav';							//default
import {courseList} from './courseList';

class ListCourses extends Component {

	createTBody(course){
		var trows=[];
		for(var i=0; i<courseList.length; i++){
			console.log(course);
			console.log(courseList[i]);
			if(course === courseList[i].title){
				trows.push(
					<tr>
						<td>{courseList[i].title}</td>
						<td>{courseList[i].section}</td>
						<td>{courseList[i].time}</td>
						<td>{courseList[i].faculty}</td>
					</tr>
				);
			}
		}
		return trows;
	}
	createTable(){
		var tables=[];
		var courses=[];
		for(var i=0; i<courseList.length; i++){
			if(!courses.includes(courseList[i].title)) courses.push(courseList[i].title);
		}

		for(i=0; i<courses.length; i++){
			tables.push(
				<div>
				<Table striped="true">
					<thead>
						<tr>
							<th data-field="title">Title</th>
							<th data-field="section">Section</th>
							<th data-field="time">Day/Time</th>
							<th data-field="instructor">Instructor</th>
						</tr>
					</thead>

					<tbody>
						{this.createTBody(courses[i])}
					</tbody>
				</Table>
				<br></br>
				</div>
			);
		}
		return tables;

	}

	createList(){
		return(
			<div>{this.createTable()}</div>
		)
	}
	render() {
		return (
			<div>
				<TopNav/>
					
				<div className="feed">
					
					{this.createList()}

				</div>
			</div>
		);
	}
}

export default ListCourses;
