import React, { Component } from 'react';
import { Modal, Button, Input } from 'react-materialize';
import './css/AdviserAdvisee.css';
import { assignment } from './adviser-advisee.js';
// import ConfirmUpdate from './ConfirmUpdate';

const autoBind = require('auto-bind');

class AdvAssignmentUpdate extends Component{
	constructor(props){
		super(props);
		this.state = {
			adviser: "",
			student: ""
		}
		autoBind(this);
	}

	listStudents(){
		var students = [];
		for(var i=0; i<assignment.length; i++){
			for(var j=0; j < assignment[i].advisees.length; j++){
				students.push(<option value={assignment[i].advisees[j]}>{assignment[i].advisees[j]}</option>);
			}
		}
		return students;
	}

	listAdvisers(){
		var adv = [];
		for(var i = 0; i < assignment.length; ++i){
			adv.push(<option value={assignment[i].adviser}>{assignment[i].adviser}</option>)
		}
		return adv;
	}

	handleAdviserSelect(event){
		this.setState({ adviser: event.target.value });
	}

	handleStudentSelect(event){
		this.setState({ student: event.target.value });
	}

	handleSubmit(){
		console.log(this.state);
	}

	render(){
		return(
			<Modal
				id="mod2"
				header='Assign New Adviser to Student'
				trigger={<Button waves='light'>Update Student Adviser</Button>}
				actions={
					<div>
						<form className="updateAdvPanel">
							<Input s={12} type='select' label="Student" defaultValue="" onChange={this.handleStudentSelect}>
								<option value=""></option>
								{this.listStudents()}
							</Input>
							<br />
							<Input s={12} type='select' label="Adviser" defaultValue="" onChange={this.handleAdviserSelect}>
								<option value=""></option>
								{this.listAdvisers()}
							</Input>
						</form>
						<div>
							<br />
							<Button id="s2" className="modal-action modal-close" waves='light' onClick={this.handleSubmit()}>Save</Button>
							<Button id="c2" waves='light' className="modal-action modal-close">Cancel</Button>
						</div>
					</div>
				}
			>
			</Modal>
		)
	}

}

export default AdvAssignmentUpdate;