import React, { Component } from 'react';
import {Button, Modal, Row, Input, Table} from 'react-materialize';

// const autoBind = require('auto-bind');

class AddConsultationHours extends Component {
	/*
	constructor(props){
		super(props)
		this.state = {
			day:""
			from:""
			to:""
		}
		autoBind(this);
	}
	*/
	updateSchedule(event){

	}

	addConsultation(event){
		
	}

	render() {
	    return (
		<div>
			<Modal
			  	header='Add Consultation Hours'
			  	fixedFooter
			  	actions={
			    	<div>
			      		<Button flat modal="close" waves="light">Save</Button>
			      		<Button flat modal="close" waves="light">Cancel</Button>
			    	</div>
			  	}
			  	trigger={<Button waves='light'>Add Consultation Hours</Button>}>
			  	<Row>
				  	<Input id="day" s={4} type='select' label="Day" defaultValue='2'>
				    	<option value='Monday'>Monday</option>
				    	<option value='Tuesday'>Tuesday</option>
				    	<option value='Wednesday'>Wednesday</option>
				    	<option value='Thursday'>Thursday</option>
				    	<option value='Friday'>Friday</option>
				  	</Input>

				  	<Input id="fromHr" s={1} type='select' label="From" defaultValue='7'>
				    	<option value='7'>7</option>
				    	<option value='8'>8</option>
				    	<option value='9'>9</option>
				    	<option value='10'>10</option>
				    	<option value='11'>11</option>
				    	<option value='12'>12</option>
				    	<option value='1'>1</option>
				    	<option value='2'>2</option>
				    	<option value='3'>3</option>
				    	<option value='4'>4</option>
				    	<option value='5'>5</option>
				    	<option value='6'>6</option>
				  	</Input>
				  	<Input id="fromMin" s={1} type='select' label="" defaultValue='00'>
				    	<option value='00'>00</option>
				    	<option value='30'>30</option>
				  	</Input>
			  	

				  	<Input id="toHr" s={1} type='select' label="To" defaultValue='8'>
				    	<option value='8'>8</option>
				    	<option value='9'>9</option>
				    	<option value='10'>10</option>
				    	<option value='11'>11</option>
				    	<option value='12'>12</option>
				    	<option value='1'>1</option>
				    	<option value='2'>2</option>
				    	<option value='3'>3</option>
				    	<option value='4'>4</option>
				    	<option value='5'>5</option>
				    	<option value='6'>6</option>
				    	<option value='7'>7</option>
				  	</Input>
				  	<Input id="toMin" s={1} type='select' label="" defaultValue='00'>
				    	<option value='00'>00</option>
				    	<option value='30'>30</option>
				  	</Input>
					
					<Button id="addBtn" onClick={this.addConsultation} floating className='red' waves='light' icon='add' />
				</Row>

				<div>
					SCHEDULE
					<Table striped="true">
					  <thead>
					    <tr>
					      <th data-field="course">Course</th>
					      <th data-field="section">Section</th>
					      <th data-field="time">Day and Time</th>
					      <th data-field="room">Room</th>
					    </tr>
					  </thead>
					  <tbody>
					    <tr>
					      <td>Alvin</td>
					      <td>Eclair</td>
					      <td>$0.87</td>
					      <td>a</td>
					    </tr>
					  </tbody>
					</Table>

				</div>
			</Modal>
		</div>
		);
	}
}

export default AddConsultationHours;