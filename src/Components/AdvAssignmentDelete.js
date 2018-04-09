import React, { Component } from 'react';
import { Modal, Button, Input } from 'react-materialize';
import './css/AdviserAdvisee.css';
import { assignment} from './adviser-advisee.js';

var autoBind = require("auto-bind")
const advStudents = []

class AdvAssignmentDelete extends Component{
	constructor(props){
		super(props);
		this.state ={
			adviser:"",
			advisee:"",
		}
		autoBind(this)
	}

	handleAdvisee(e){
		if(advStudents.length !== 0){this.setState({advisee:advStudents[e.target.value]})}
	}

	handleAdviser(e){
		this.setState({adviser:assignment[e.target.value].adviser})
		advStudents = assignment[e.target.value].advisees
		this.forceUpdate()
	}

	handleClick(){
		console.log(this.state)
	}

	render(){
		return(
			<Modal
				id="mod3"
				header="Delete Current Student's Adviser"
				trigger={<Button waves='light'>Delete a Student's Adviser</Button>}
				actions={
					<div>
						<form className="updateAdvPanel">
							<Input s={12} type='select' label="Student" onChange={this.handleAdvisee} value={null}>
								{advStudents.length === 0 ? null:advStudents.map((student, index)=>{
										return(
											<option value={index}>{student}</option>
										);
									})	 
								}
							</Input>
							<br />
							<Input s={12} type='select' label="Adviser" onChange={this.handleAdviser} value={null}>
								{
									assignment.map((ass, index)=>{
										return(
											<option value={index}>{ass.adviser}</option>
										);
									})	
								}
							</Input>
						</form>
						<div>
							<br />
							<Modal
							header="Confirm Delete"
							trigger={<Button id="s2" waves='light' className="modal-action modal-close">Delete</Button>}
							actions={
								<div>
								<Button id="s2" waves='light' className="modal-action modal-close blue" onClick={this.handleClick}>Yes</Button>
								<Button id="c2" waves='light' className="modal-action modal-close red">No</Button>	
								</div>
							}>
							Are you sure?
							</Modal>
							<Button id="c2" waves='light' className="modal-action modal-close">Cancel</Button>
						</div>
					</div>
				}
			>
			</Modal>
		)
	}

}

export default AdvAssignmentDelete;