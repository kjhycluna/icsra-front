import React, { Component } from 'react';
import axios from 'axios';
import cookie from 'react-cookies';
import {Button, Modal, Row, Input, Table} from 'react-materialize';

const autoBind = require('auto-bind');

class AddConsultationHours extends Component {
	
	constructor(props){
		super(props)
		this.state = {
			empno: parseInt(cookie.load('user')),
			day:"Monday",
			fromHour:"7",
			fromMin:"00",
			toHour:"8",
			toMin:"00"
		}
		autoBind(this);
	}
	setDay(event){
		this.setState({ day: event.target.value })
	}

	setFromHour(event){
		this.setState({ fromHour: event.target.value })
	}

	setFromMin(event){
		this.setState({ fromMin: event.target.value })
	}

	setToHour(event){
		this.setState({ toHour: event.target.value })
	}

	setToMin(event){
		this.setState({ toMin: event.target.value })
	}
	
	updateSchedule(event){

	}

	addConsultation(){
		var fromTime = this.state.fromHour + ":" + this.state.fromMin + ":00"
		var toTime = this.state.toHour + ":" + this.state.toMin + ":00"
		console.log(fromTime)
		console.log(toTime)
		console.log(this.state.day)

		axios.post('schedule/add-chfaculty', {
			empno: this.state.empno,
			room: "xxx",
			day: this.state.day,
			start_time: fromTime,
			end_time: toTime
		})
		.then(function(res){
			console.log("hjhfgsdjgf")
			if(res.data.status === 200){
				console.log("done")
				//add to schedule or refresh schedule
			}else{
				window.alert(res.data.message)
			}
		})
	}

	render() {
	    return (
		<div>
			<Modal
			  	header='Add Consultation Hours'
			  	fixedFooter
			  	actions={
			    	<div>
			      		<div className="aSave"><Button modal="close" waves="light">Save</Button></div>
			      		<div className="aCancel"><Button modal="close" waves="light">Cancel</Button></div>
			    	</div>
			  	}
			  	trigger={<Button waves='light'>Add Consultation Hours</Button>}>
			  	<Row>
				  	<Input id="day" s={4} type='select' label="Day" value={this.state.day} onChange={event => this.setDay(event)} >
				    	<option value='M'>Monday</option>
				    	<option value='T'>Tuesday</option>
				    	<option value='W'>Wednesday</option>
				    	<option value='TH'>Thursday</option>
				    	<option value='F'>Friday</option>
				  	</Input>

				  	<Input id="fromHr" s={1} type='select' label="From" value={this.state.fromHour} onChange={event => this.setFromHour(event)} >
				    	<option value='7'>7</option>
				    	<option value='8'>8</option>
				    	<option value='9'>9</option>
				    	<option value='10'>10</option>
				    	<option value='11'>11</option>
				    	<option value='12'>12</option>
				    	<option value='13'>1</option>
				    	<option value='14'>2</option>
				    	<option value='15'>3</option>
				    	<option value='16'>4</option>
				    	<option value='17'>5</option>
				    	<option value='18'>6</option>
				  	</Input>
				  	<Input id="fromMin" s={1} type='select' label="" value={this.state.fromMin} onChange={event => this.setFromMin(event)}>
				    	<option value='00'>00</option>
				    	<option value='30'>30</option>
				  	</Input>
			  	

				  	<Input id="toHr" s={1} type='select' label="To" value={this.state.toHour} onChange={event => this.setToHour(event)}>
				    	<option value='8'>8</option>
				    	<option value='9'>9</option>
				    	<option value='10'>10</option>
				    	<option value='11'>11</option>
				    	<option value='12'>12</option>
				    	<option value='13'>1</option>
				    	<option value='14'>2</option>
				    	<option value='15'>3</option>
				    	<option value='16'>4</option>
				    	<option value='17'>5</option>
				    	<option value='18'>6</option>
				    	<option value='19'>7</option>
				  	</Input>
				  	<Input id="toMin" s={1} type='select' label="" value={this.state.toMin} onChange={event => this.setToMin(event)}>
				    	<option value='00'>00</option>
				    	<option value='30'>30</option>
				  	</Input>
					
					<Button id="addBtn" onClick={this.addConsultation} floating className='red' waves='light' icon='add' />
				</Row>
			</Modal>
		</div>
		);
	}
}

export default AddConsultationHours;