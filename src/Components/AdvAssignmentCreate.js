import React, { Component } from 'react';					//default
import {Modal, Row, Input, Button} from 'react-materialize';	//use react-materialize.github.io

const autoBind = require('auto-bind');

const initialState =  {
			studentNum: "",
			studentName: "",
			adviser: ""
		}

class AdvAssignmentCreate extends Component{

	constructor(props){
		super(props)
		this.state = {
			studentNum: "",
			studentName: "",
			adviser: ""
		}
		autoBind(this);
	}

	handleYes(){
		window.Materialize.toast("Assignment created!",3000);
		this.setState(initialState)
	}
	render(){
	    return (
		<div>

		<Modal id="modal1" actions={<div>
									<Modal header='Confirm Changes' actions={
										<div>
											<div className="aCancel"><Button className="modal-action modal-close red">No</Button>
											</div>
											<div className="aSave"><Button className="modal-action modal-close blue" onClick={this.handleYes}>Yes</Button>
											</div>
										</div>} 
									trigger={<div className="aSave"><Button className="modal-action modal-close">Save Changes</Button></div>}>
									<p>Are you sure?</p>
									</Modal>
									<div className="aCancel"><Button className="modal-action modal-close">Cancel</Button></div></div>} 
		header='Create Adviser-Advisee Assignment' trigger={<Button waves='light'>Assign an Adviser to a Student</Button>}>
  			<Row>
  				<Input s={12} type='select' label="Student Number" defaultValue='0'>
					<option value='1'>2020-12345</option>
					<option value='2'>2018-09876</option>
					<option value='3'>2019-45678</option>
					<option value='2'>2018-29190</option>
					<option value='2'>2018-34892</option>
					<option value='2'>2018-39393</option>
  				</Input>
  				<Input s={12} label="Student Name" defaultValue="" disabled/>
  				<Input s={12} type='select' label="Select Adviser" defaultValue='0'>
					<option value='2'>Last Name, First Name MI</option>
					<option value='2'>Last Name, First Name MI</option>
					<option value='2'>Last Name, First Name MI</option>
					<option value='2'>Last Name, First Name MI</option>
					<option value='2'>Last Name, First Name MI</option>
					<option value='2'>Last Name, First Name MI</option>
					<option value='1'>Adviser not listed</option>
  				</Input>
  				<Input s={12} label="Adviser Name" defaultValue="" disabled/> {/*is only enabled when "Adviser not listed" is selected*/}
  			</Row>
		</Modal>
		</div>
		);
	}
}

export default AdvAssignmentCreate;