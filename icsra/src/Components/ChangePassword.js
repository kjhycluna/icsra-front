import React, { Component } from 'react';					//default
import {Modal,NavItem,Row,Input,Button} from 'react-materialize';	//use react-materialize.github.io								//css file of your component
// import TopNav from './TopNav';								//default

const autoBind = require('auto-bind');

const initialState =  {
			old_password:"",
			new_password:"",
			retyped_new_password:"",
		}

class ChangePassword extends Component{

	constructor(props){
		super(props)
		this.state = {
			old_password:"",
			new_password:"",
			retyped_new_password:"",
		}
		autoBind(this);
	}

	handleOldPassword(e){this.setState({old_password:e.target.value})}
	handleNewPassword(e){this.setState({new_password:e.target.value})}
	handleRetypedNewPassword(e){this.setState({retyped_new_password:e.target.value})}
	
	checkMatch(){
		if(this.state.new_password === this.state.retyped_new_password){
			return true
		}
	}

	handleYes(){
		window.Materialize.toast("Password Changed!",3000);
		this.setState(initialState)
	}
	render(){
	    return (
		<div>

		<Modal id="modal1" actions={<div>
									<Modal header='Confirm Changes' actions={<div><Button className="modal-action modal-close red">No</Button><Button className="modal-action modal-close blue" onClick={this.handleYes}>Yes</Button></div>} 
									trigger={<Button className="modal-action modal-close blue">Save Changes</Button>}>
									<p>Are you sure?</p>
									</Modal>
									<Button className="modal-action modal-close">Cancel</Button></div>} 
		header='Change Password' trigger={<NavItem>Change Password</NavItem>}>
  			<Row>
  				<Input value={this.state.old_password} s={12} type="password" label="Password" onChange={this.handleOldPassword}/>
  				<Input value={this.state.new_password} s={12} type="password" label="New Password" onChange={this.handleNewPassword}/>
  				<Input value={this.state.retyped_new_password} s={12} type="password" label="Retype New Password" onChange={this.handleRetypedNewPassword} error={this.state.retyped_new_password === "" || (this.state.retyped_new_password === this.state.new_password) ? null : "Incorrect Password"}/>
  			</Row>
		</Modal>
		</div>
		);
	}
}

export default ChangePassword;