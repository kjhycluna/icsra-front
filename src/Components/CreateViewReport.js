import React, { Component } from 'react';						//default
import { Button, Table, Icon} from 'react-materialize';				//use react-materialize.github.io
//import NumericInput from 'react-numeric-input';
import './css/CreateViewReport.css';										//css file of your component
import TopNav from './TopNav';									//default
import {dateTime} from './datetimelog'; //dummy values for courses

class CreateViewReport extends Component {

	createTBody(date){ //returns the table of a certain subject in array form
		var trows = [];
		for (var i = 0; i< dateTime.length; i++) {
			if(date === dateTime[i].date){
				trows.push(
					<tr>
					<td>{dateTime[i].date} {dateTime[i].time}</td> {/*name talaga */}
					<td className="reportsbtn">
						<Button waves='light'><Icon center>insert_drive_file</Icon></Button>
					</td>
					<td className="reportsbtn">
						<Button waves='light'><Icon center>file_download</Icon></Button>
					</td>
					</tr>
				)
			}
		}

		return trows;
	}

	createTable(){ //returns the whole table
		var tables = []; //you can push a certain html-like snippet into an array [<div> code </div>, <Table> code </Table>, etc]
		var dates = []; 
		//finds the list of the subjects so they will be viewed separately
		for (var i = 0; i < dateTime.length; i++) {
			if(!dates.includes(dateTime[i].date)) dates.push(dateTime[i].date);
		}

		for(i = 0; i < dates.length; i++){ //loops subjects.length (total no. of subjects) times
			tables.push( //repeatedly push a <Table> </Table>
				<Table striped="true">
				<thead>
				    <tr>
				      	<th data-field="date">Name</th>
				      	<th data-field="dayTime">View</th>
				      	<th data-field="inst">Download</th>
				    </tr>
				</thead>

				<tbody>
					{this.createTBody(dates[i])}
				</tbody>
				</Table>
			);
		}

		return tables;
	}

	createFeed(){ //creates the feed (exactly as what you made then)
		return(
			<div>
			{this.createTable()}
			</div>
		)
	}

	render() {
		return (
			<div>
				<TopNav/>
				<div className="feed">	
					<div className="reportName">
						Report Log
					</div>

					{this.createFeed()}	
				</div>
			</div>
		);
	}
}

export default CreateViewReport;