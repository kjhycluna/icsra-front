import React, { Component } from 'react';
import {Row, Input, Button} from 'react-materialize';
import cookie from 'react-cookies' //npm install react-cookies --save
import axios from 'axios'; //
import './Login.css';



const autoBind = require('auto-bind');

class Login extends Component {
	constructor(props){
		super(props)
		this.state = {
			email:"",
			password:""
		}
		autoBind(this);
		// this.updateEmailValue = this.updateEmail.bind(this);
		// this.updatePassValue = this.updatePassword.bind(this);
		// this.handleSubmit = this.handleSubmit.bind(this);
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
	
	handleSubmit(){
		// fetch("/api/login"
		// if(res.committee_member){
		// 	window.location = '/home/admin'
		// }else{
		// 	window.location = '/home'
		// }
		
		this.saveUser().then(function(res){
			console.log("ggs")
			console.log(res.data)
			if(res.data.status === 200){
				cookie.save('user', res.data.data, { path: '/' })
				window.location = '/home'
			}else
				window.alert(res.data.message)
		})


	}

	saveUser(){
		return axios.post('api/login', {
			email: this.state.email,
			password: this.state.password
		})
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