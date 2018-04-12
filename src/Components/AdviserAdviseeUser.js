import React, { Component } from 'react';
import {Table} from 'react-materialize';
import './css/AdviserAdvisee.css';
import TopNav from './TopNav';
import axios from 'axios';

class AdviserAdviseeUser extends Component {
	constructor(props){
		super(props)
		this.state = { //mostly attributes of student (for sidebar)
			user: 'JM Bawagan',
                  advisees:[]
		}
	}

      getStudents(){
        return axios.post('advisee/view-advisee-by-faculty', {registration_adviser:1})
        .catch(function (error) {
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              // The request was made but no response was received
              // `error.request` is an instance of XMLHttpRequest in the bfacultyer and an instance of
              // http.ClientRequest in node.js
              console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log('Error', error.message);
            }
            console.log(error.config);
          });
      }
      componentWillMount(){
        this.getStudents().then((response)=>{
          var value=response.data.data
          this.setState({advisees:value})
        })
        this.setState({advisees:[]})
      }

	render() {
	    return (
		<div>
            <TopNav/>

            <div className="feed">
            	<br /><br />
            	<Table striped="true" bordered="true">
                        <tbody>
                        <tr>
            				<th>Student Number</th>
            				<th>Name</th>
            				<th>E-mail</th>
            				<th>Units Earned</th>
            				<th>Previous Advisers</th>
            			</tr>
                        {
                            this.state.advisees.map((item,index)=>{
                              return(<tr key={index}>
                                    <td>{item.studno}</td>
                                    <td>{item.lname}, {item.fname}</td>
                                    <td>{item.email}</td>
                                    <td>{item.unitsearned}</td>
                                    <td>prev adv</td>
                              </tr>)
                        })
                        }
                        </tbody>
            	</Table>
            </div>

		</div>
		);
	}
}

export default AdviserAdviseeUser;