import React, { Component } from 'react';
import {Row, Input, Button} from 'react-materialize';
import './css/Login.css';
import {userList} from './userList';

const autoBind = require('auto-bind');

class Login extends Component {
	constructor(props){
		super(props)
		this.state = {
			email:"",
			password:""
		}
		autoBind(this);
		/*this.updateEmail = this.updateEmail.bind(this);
		this.updatePassword = this.updatePassword.bind(this);*/
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	/*updateEmail(event){
		this.setState({email : event.target.value})
	}

	updatePassword(event){
		this.setState({password : event.target.value})
	}*/

	updateEmailValue(event){
		this.setState({email : event.target.value})
	}
	updatePassValue(event){
		this.setState({password : event.target.value})
	}
	
	handleSubmit(event){
		// fetch("/api/login"
		// if(res.committee_member){
		// 	window.location = '/home/admin'
		// }else{
		// 	window.location = '/home'
		// }

		for(var i=0; i<userList.length; i++){
			if(this.state.email == userList[i].email && this.state.password == userList[i].password){
				console.log(userList[i])
				if(userList[i].committee_member){
					window.location = '/home/admin'
				}else{
					window.location = '/home'
				}
			}
		}
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
						<Input value={this.state.email} onChange={event => this.updateEmailValue(event)} type="email" label="Email" s={12}/>
						<Input value={this.state.password} onChange={event => this.updatePassValue(event)} type="password" label="Password" s={12} />
					</Row>

					<div className="center">

						<Button waves='light' onClick={this.handleSubmit}>
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