import React, { Component } from 'react';
import {Row, Input, Button} from 'react-materialize';
import './Login.css';

// const autoBind = require('auto-bind');

class Login extends Component {
	/*constructor(props){
		super(props)
		this.state = {
			email:"",
			password:""
		}
		autoBind(this);
		this.updateEmail = this.updateEmail.bind(this);
		this.updatePassword = this.updatePassword.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}*/

	updateEmail(event){
	this.setState({email : event.target.value})
	}

	updatePassword(event){
	this.setState({password : event.target.value})
	}

	handleSubmit(){
		console.log('Your input value is: ' + this.state.username);
		// window.location = '/HomeProfile'; //should go to /home
	}

	render() {
	    return (
		<div>
			<div className="left">
				ICSRA
			</div>

			<div className="right">
				<div className="inputs">
					<Row>
						<Input type="email" label="Email" s={12} />
						<Input type="password" label="Password" s={12} />
					</Row>

					<div className="center">

						<Button waves='light' node='a' href='/home'>
							LOGIN
						</Button>
					</div>
				</div>
			</div>
		</div>
		);
	}
}

export default Login;
//Line 49: <Button waves='light' onClick={this.handleSubmit()}>