import React, { Component } from 'react';					//default
import { Table, Button, Icon } from 'react-materialize';	//use react-materialize.github.io
import './ListCourses.css';								//css file of your component
import TopNav from './TopNav';								//default

class ListCourses extends Component {
	render() {
		return (
			<div>
				<TopNav/>
					
				<div className="feed">
					
					// NEW SUBJECT
					<div>
						<Table striped="true">
						  <thead>
						    <tr>
						      <th data-field="subj">Subject</th>
						      <th data-field="sec">Section</th>
						      <th data-field="dayTime">Day/Time</th>
						      <th data-field="inst">Instructor</th>
						      <th data-field="edit">Edit</th>
						      <th data-field="delete">Delete</th>
						    </tr>
						  </thead>

						  <tbody>
						    <tr>
						      <td>CMSC 128</td>
						      <td>A1L</td>
						      <td>Mon/16:00-19:00</td>
						      <td>Hopper, Grace</td>
						      <td>
						        <Button waves='light'><Icon center>edit</Icon></Button>
						      </td>
						      <td>
						        <Button waves='light'><Icon center>delete</Icon></Button>
						      </td>
						    </tr>
						    
						    <tr>
						      <td>CMSC 128</td>
						      <td>A2L</td>
						      <td>Tue/16:00-19:00</td>
						      <td>Turing, Alan</td>
						      <td>
						        <Button waves='light'><Icon center>edit</Icon></Button>
						      </td>
						      <td>
						        <Button waves='light'><Icon center>delete</Icon></Button>
						      </td>
						    </tr>
						  
						    <tr>
						      <td>CMSC 128</td>
						      <td>A3L</td>
						      <td>Wed/10:00-13:00</td>
						      <td>Dijkstra, Edsger</td>
						      <td>
						        <Button waves='light'><Icon center>edit</Icon></Button>
						      </td>
						      <td>
						        <Button waves='light'><Icon center>delete</Icon></Button>
						      </td>
						    </tr>
						    
						    <tr>
						      <td>CMSC 128</td>
						      <td>A4L</td>
						      <td>Wed/13:00-16:00</td>
						      <td>Hopper, Grace</td>
						      <td>
						        <Button waves='light'><Icon center>edit</Icon></Button>
						      </td>
						      <td>
						        <Button waves='light'><Icon center>delete</Icon></Button>
						      </td>
						    </tr>
						    
						    <tr>
						      <td>CMSC 128</td>
						      <td>A5L</td>
						      <td>Thu/10:00-13:00</td>
						      <td>Turing, Alan</td>
						      <td>
						        <Button waves='light'><Icon center>edit</Icon></Button>
						      </td>
						      <td>
						        <Button waves='light'><Icon center>delete</Icon></Button>
						      </td>
						    </tr>
						  
						    <tr>
						      <td>CMSC 128</td>
						      <td>A6L</td>
						      <td>Fri/16:00-19:00</td>
						      <td>Dijkstra, Edsger</td>
						      <td>
						        <Button waves='light'><Icon center>edit</Icon></Button>
						      </td>
						      <td>
						        <Button waves='light'><Icon center>delete</Icon></Button>
						      </td>
						    </tr>
						  </tbody>
						</Table>
					</div>

					// NEW SUBJECT
					<div>
						<Table striped="true">
						  <thead>
						    <tr>
						      <th data-field="subj">Subject</th>
						      <th data-field="sec">Section</th>
						      <th data-field="dayTime">Day/Time</th>
						      <th data-field="inst">Instructor</th>
						      <th data-field="edit">Edit</th>
						      <th data-field="delete">Delete</th>
						    </tr>
						  </thead>

						  <tbody>
						    <tr>
						      <td>CMSC 128</td>
						      <td>A1L</td>
						      <td>Mon/16:00-19:00</td>
						      <td>Hopper, Grace</td>
						      <td>
						        <Button waves='light'><Icon center>edit</Icon></Button>
						      </td>
						      <td>
						        <Button waves='light'><Icon center>delete</Icon></Button>
						      </td>
						    </tr>
						    
						    <tr>
						      <td>CMSC 128</td>
						      <td>A2L</td>
						      <td>Tue/16:00-19:00</td>
						      <td>Turing, Alan</td>
						      <td>
						        <Button waves='light'><Icon center>edit</Icon></Button>
						      </td>
						      <td>
						        <Button waves='light'><Icon center>delete</Icon></Button>
						      </td>
						    </tr>
						  
						    <tr>
						      <td>CMSC 128</td>
						      <td>A3L</td>
						      <td>Wed/10:00-13:00</td>
						      <td>Dijkstra, Edsger</td>
						      <td>
						        <Button waves='light'><Icon center>edit</Icon></Button>
						      </td>
						      <td>
						        <Button waves='light'><Icon center>delete</Icon></Button>
						      </td>
						    </tr>
						    
						    <tr>
						      <td>CMSC 128</td>
						      <td>A4L</td>
						      <td>Wed/13:00-16:00</td>
						      <td>Hopper, Grace</td>
						      <td>
						        <Button waves='light'><Icon center>edit</Icon></Button>
						      </td>
						      <td>
						        <Button waves='light'><Icon center>delete</Icon></Button>
						      </td>
						    </tr>
						    
						    <tr>
						      <td>CMSC 128</td>
						      <td>A5L</td>
						      <td>Thu/10:00-13:00</td>
						      <td>Turing, Alan</td>
						      <td>
						        <Button waves='light'><Icon center>edit</Icon></Button>
						      </td>
						      <td>
						        <Button waves='light'><Icon center>delete</Icon></Button>
						      </td>
						    </tr>
						  
						    <tr>
						      <td>CMSC 128</td>
						      <td>A6L</td>
						      <td>Fri/16:00-19:00</td>
						      <td>Dijkstra, Edsger</td>
						      <td>
						        <Button waves='light'><Icon center>edit</Icon></Button>
						      </td>
						      <td>
						        <Button waves='light'><Icon center>delete</Icon></Button>
						      </td>
						    </tr>
						  </tbody>
						</Table>
					</div>

					// NEW SUBJECT
					<div>
						<Table striped="true">
						  <thead>
						    <tr>
						      <th data-field="subj">Subject</th>
						      <th data-field="sec">Section</th>
						      <th data-field="dayTime">Day/Time</th>
						      <th data-field="inst">Instructor</th>
						      <th data-field="edit">Edit</th>
						      <th data-field="delete">Delete</th>
						    </tr>
						  </thead>

						  <tbody>
						    <tr>
						      <td>CMSC 128</td>
						      <td>A1L</td>
						      <td>Mon/16:00-19:00</td>
						      <td>Hopper, Grace</td>
						      <td>
						        <Button waves='light'><Icon center>edit</Icon></Button>
						      </td>
						      <td>
						        <Button waves='light'><Icon center>delete</Icon></Button>
						      </td>
						    </tr>
						    
						    <tr>
						      <td>CMSC 128</td>
						      <td>A2L</td>
						      <td>Tue/16:00-19:00</td>
						      <td>Turing, Alan</td>
						      <td>
						        <Button waves='light'><Icon center>edit</Icon></Button>
						      </td>
						      <td>
						        <Button waves='light'><Icon center>delete</Icon></Button>
						      </td>
						    </tr>
						  
						    <tr>
						      <td>CMSC 128</td>
						      <td>A3L</td>
						      <td>Wed/10:00-13:00</td>
						      <td>Dijkstra, Edsger</td>
						      <td>
						        <Button waves='light'><Icon center>edit</Icon></Button>
						      </td>
						      <td>
						        <Button waves='light'><Icon center>delete</Icon></Button>
						      </td>
						    </tr>
						    
						    <tr>
						      <td>CMSC 128</td>
						      <td>A4L</td>
						      <td>Wed/13:00-16:00</td>
						      <td>Hopper, Grace</td>
						      <td>
						        <Button waves='light'><Icon center>edit</Icon></Button>
						      </td>
						      <td>
						        <Button waves='light'><Icon center>delete</Icon></Button>
						      </td>
						    </tr>
						    
						    <tr>
						      <td>CMSC 128</td>
						      <td>A5L</td>
						      <td>Thu/10:00-13:00</td>
						      <td>Turing, Alan</td>
						      <td>
						        <Button waves='light'><Icon center>edit</Icon></Button>
						      </td>
						      <td>
						        <Button waves='light'><Icon center>delete</Icon></Button>
						      </td>
						    </tr>
						  
						    <tr>
						      <td>CMSC 128</td>
						      <td>A6L</td>
						      <td>Fri/16:00-19:00</td>
						      <td>Dijkstra, Edsger</td>
						      <td>
						        <Button waves='light'><Icon center>edit</Icon></Button>
						      </td>
						      <td>
						        <Button waves='light'><Icon center>delete</Icon></Button>
						      </td>
						    </tr>
						  </tbody>
						</Table>
					</div>

					// NEW SUBJECT
					<div>
						<Table striped="true">
						  <thead>
						    <tr>
						      <th data-field="subj">Subject</th>
						      <th data-field="sec">Section</th>
						      <th data-field="dayTime">Day/Time</th>
						      <th data-field="inst">Instructor</th>
						      <th data-field="edit">Edit</th>
						      <th data-field="delete">Delete</th>
						    </tr>
						  </thead>

						  <tbody>
						    <tr>
						      <td>CMSC 128</td>
						      <td>A1L</td>
						      <td>Mon/16:00-19:00</td>
						      <td>Hopper, Grace</td>
						      <td>
						        <Button waves='light'><Icon center>edit</Icon></Button>
						      </td>
						      <td>
						        <Button waves='light'><Icon center>delete</Icon></Button>
						      </td>
						    </tr>
						    
						    <tr>
						      <td>CMSC 128</td>
						      <td>A2L</td>
						      <td>Tue/16:00-19:00</td>
						      <td>Turing, Alan</td>
						      <td>
						        <Button waves='light'><Icon center>edit</Icon></Button>
						      </td>
						      <td>
						        <Button waves='light'><Icon center>delete</Icon></Button>
						      </td>
						    </tr>
						  
						    <tr>
						      <td>CMSC 128</td>
						      <td>A3L</td>
						      <td>Wed/10:00-13:00</td>
						      <td>Dijkstra, Edsger</td>
						      <td>
						        <Button waves='light'><Icon center>edit</Icon></Button>
						      </td>
						      <td>
						        <Button waves='light'><Icon center>delete</Icon></Button>
						      </td>
						    </tr>
						    
						    <tr>
						      <td>CMSC 128</td>
						      <td>A4L</td>
						      <td>Wed/13:00-16:00</td>
						      <td>Hopper, Grace</td>
						      <td>
						        <Button waves='light'><Icon center>edit</Icon></Button>
						      </td>
						      <td>
						        <Button waves='light'><Icon center>delete</Icon></Button>
						      </td>
						    </tr>
						    
						    <tr>
						      <td>CMSC 128</td>
						      <td>A5L</td>
						      <td>Thu/10:00-13:00</td>
						      <td>Turing, Alan</td>
						      <td>
						        <Button waves='light'><Icon center>edit</Icon></Button>
						      </td>
						      <td>
						        <Button waves='light'><Icon center>delete</Icon></Button>
						      </td>
						    </tr>
						  
						    <tr>
						      <td>CMSC 128</td>
						      <td>A6L</td>
						      <td>Fri/16:00-19:00</td>
						      <td>Dijkstra, Edsger</td>
						      <td>
						        <Button waves='light'><Icon center>edit</Icon></Button>
						      </td>
						      <td>
						        <Button waves='light'><Icon center>delete</Icon></Button>
						      </td>
						    </tr>
						  </tbody>
						</Table>
					</div>

				</div>
			</div>
		);
	}
}

export default ListCourses;
