import React, { Component } from 'react';					//default
import { Table } from 'react-materialize';	//use react-materialize.github.io
import './ListSchedProf.css';								//css file of your component
import TopNav from './TopNav';								//default

class ListSchedProf extends Component {
	render() {
		return (
			<div>
				<TopNav/>
					
				<div className="feed">
					<div>
						<div className="profName">
							SURNAME, FIRST NAME MI
						</div>

						<div className="teachLoad">
							Total Teaching Load: XX
						</div>
					</div>

					<div className="tableFeed">
						<Table striped="true">
	  						<thead>
	    						<tr>
						      		<th data-field="id">Subject</th>
						      		<th data-field="name">Section</th>
						      		<th data-field="price">Day & Time</th>
						      		<th data-field="name">No. of Students</th>
						      		<th data-field="price">Status</th>
						    	</tr>
						  	</thead>

						  	<tbody>
						    	<tr>
							      	<td>CMSC 128</td>
							      	<td>A2L</td>
							      	<td>Tue/16:00-19:00</td>
							      	<td>22</td>
							      	<td>TBA</td>
							    </tr>
							    
							    <tr>
							      	<td>CMSC 128</td>
							      	<td>T2L</td>
							      	<td>Wed/13:00-16:00</td>
							      	<td>21</td>
							      	<td>TBA</td>
							    </tr>
							    
							    <tr>
							      	<td>CMSC 125</td>
							      	<td>T3L</td>
							      	<td>Wed/16:00-19:00</td>
							      	<td>22</td>
							      	<td>TBA</td>
							    </tr>
							    
							    <tr>      
							      	<td>CMSC 128</td>
							     	<td>A</td>
							      	<td>Tue/07:00-08:00</td>
							      	<td>150</td>
							      	<td>TBA</td>
							    </tr>
							</tbody>
						</Table>
					</div>
				</div>
			</div>
		);
	}
}

export default ListSchedProf;