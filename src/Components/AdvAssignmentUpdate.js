import React, { Component } from 'react';
import { Modal, Button, Input } from 'react-materialize';
import './AdviserAdvisee.css';
import { assignment, students } from './adviser-advisee.js';
import ConfirmUpdate from './ConfirmUpdate';

class ListAdvisees extends Component{
	render(){
		return(
			<Input s={12} type='select' label="Student">
				{
					students.map((student, index)=>{
						return(
							<option value={index}>{student.name}</option>
						);
					})	
				}
			</Input>
		)
	}
}

class ListAdvisers extends Component{
	render(){
		return(
			<Input s={12} type='select' label="Adviser">
				{
					assignment.map((ass, index)=>{
						return(
							<option value={index}>{ass.adviser}</option>
						);
					})	
				}
			</Input>
		)
	}
}

class AdvAssignmentUpdate extends Component{
	/*constructor(props){
		super(props);
		// this.state = 
	}*/

	render(){
		return(
			<Modal
				id="mod2"
				header='Assign New Adviser to Student'
				trigger={<Button waves='light'>Update a Student's Adviser</Button>}
				actions={
					<div>
						<form className="updateAdvPanel">
							<ListAdvisees />
							<br />
							<ListAdvisers />
						</form>
						<div>
							<br />
							<ConfirmUpdate />
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