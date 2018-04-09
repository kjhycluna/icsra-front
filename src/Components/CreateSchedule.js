import React, { Component } from 'react';								//default
import { Button, Table, Dropdown, NavItem } from 'react-materialize';	//use react-materialize.github.io
import './css/CreateSchedule.css';										//css file of your component
import TopNav from './TopNav';											//default
import {subjects} from './subjects'; 									//dummy values for subjects
import {professors} from './professors'; 								//dummy values for prfoessors
import {scheduleDone} from './scheduleDone'; 							//dummy values for schedule done

class CreateSchedule extends Component {  

	navSubjects(subDefault){
		var subjectList = [];

		for (var i = 0; i< subjects.length; i++) {
			subjectList.push(
				<NavItem>{subjects[i].subjectName}</NavItem>
			)
		}

		return subjectList;
	}

	navSections(subDefault){
		var subjectList = [];

		for (var i = 0; i< subjects.length; i++) {
			subjectList.push(
				<NavItem>{subjects[i].subjectName}</NavItem>
			)
		}

		return subjectList;
	}

	navProfs(){
		var profList = [];

		for (var i = 0; i< professors.length; i++) {
			var lname = professors[i].lname;
			var comma = ", "
			var lnameConcat = lname.concat(comma);				
			var finalConcat = lnameConcat.concat(professors[i].fname);	

			profList.push(
				<NavItem>{finalConcat}</NavItem>
			)
		}

		return profList;
	}

	createTBody(subject){
		var doneRow = [];

		for (var i = 0; i< scheduleDone.length; i++) {
			var lname = scheduleDone[i].lname;
			var comma = ", "
			var lnameConcat = lname.concat(comma);				
			var finalConcat = lnameConcat.concat(scheduleDone[i].fname);	

			doneRow.push(
				<tr>
					<td>{scheduleDone[i].subject}</td>
					<td>{scheduleDone[i].section}</td>
					<td>{finalConcat}</td>
				</tr>
			)
		}

		return doneRow;		
	}

	createTable(){
		var tables = []; 	//you can push a certain html-like snippet into an array [<div> code </div>, <Table> code </Table>, etc]
		var doneScheds = []; 

		for (var i = 0; i < scheduleDone.length; i++) {
			doneScheds.push(scheduleDone[i].subject);
		}

		for(i = 0; i < doneScheds.length; i++){ 		//loops subjects.length (total no. of subjects) times
			tables.push( 								//repeatedly push a <Table> </Table>
				<Table striped="true">
				
				<thead>
				    <tr>
				      	<th data-field="subject">Subject</th>
				      	<th data-field="section">Section</th>
				      	<th data-field="Professor">Professor</th>
				    </tr>
				</thead>

				<tbody>
					{this.createTBody(doneScheds[i])}
				</tbody>

				</Table>
			);
		}

		return tables;
	}

	createDoneScheds(){
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
						Create Schedule
					</div>

					<div className="divButtons">

						<div className="emptyDropdown">
						</div>

						<div className="subjectDropdown">
							<Dropdown trigger={
    							<Button>Subjects</Button>
  							}>
  								{this.navSubjects()}
							</Dropdown>
						</div>

						<div className="sectionDropdown">
							<Dropdown trigger={
    							<Button>Section</Button>
  							}>
  
  								{this.navSections()}
							</Dropdown>
						</div>

						<div className="profDropdown">
							<Dropdown trigger={
    							<Button>Professor</Button>
  							}>
  								{this.navProfs()}
							</Dropdown>
						</div>

						<div className="saveButton">
    						<Button waves="light">Save Schedule</Button>
						</div>
					</div>

					<div className="divBlank">
					</div>					

					<div className="divTables">
						<div className="createdSchedTable">
							<div className="savedSched">
								SAVED SCHEDULE
							</div>

							<div className="savedSchedTable">
								{this.createDoneScheds("CMSC 128")}	
							</div>						
						</div>
					</div>

					<div className="divBlank">
					</div>	
				</div>
			</div>
		);
	}
}

export default CreateSchedule;