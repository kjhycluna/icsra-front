import React, { Component } from 'react';					//default
import { Table, Collapsible, CollapsibleItem } from 'react-materialize';	//use react-materialize.github.io
import './css/ListSchedProf.css';								//css file of your component
import TopNav from './TopNav';	
import axios from 'axios';

// const autoBind = require('auto-bind');
/*const courses =[
	{course_no:"CMSC 128",section:"A",time:"TTh 8:00-9:00",status:"TBA",students:64},
	{course_no:"CMSC 132",section:"ST1L",time:"T 13:00-16:00",status:"TBA",students:16}
]*/

class ListSchedProf extends Component {
	constructor(props){
		super(props)

		this.state={
			faculty:[],
			schedPerFIC:[],
			name:""
		};
	}

	getFIC(){
	  return axios.get('faculty/view-all')
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
	getSched(){
		return axios.get('schedule/view-all-schedule')
	}
	componentWillMount(){
	  this.getFIC().then((response)=>{
	    var value=response.data.data
	    this.setState({faculty:value})
	  })
	  this.setState({faculty:[]})
	  this.getSched().then((response)=>{
	    var value=response.data.data
	    this.setState({schedPerFIC:value})
	  })
	  this.setState({schedPerFIC:[]})
	}
	getName(x){
		return x.lname + " " + x.fname;
	}

	render() {
		return (
			<div>
				<TopNav/>
				<div className="feed">
					<br /><br />
					<div>
					{
			  		this.state.faculty.map((item,index)=>{
			  			return(<tr key={index}>
			  				<Collapsible accordion="true" defaultActiveKey={1}>
			  				  <CollapsibleItem header={this.getName(item)}>
			  				  	<div className="teachLoad">
									Total Teaching Load: {item.teaching_load}
								</div>
								<br /><br />
								<Table>
			  						<thead>
			    						<tr>
								      		<th data-field="subject">Subject</th>
								      		<th data-field="section">Section</th>
								      		<th data-field="day&time">Day & Time</th>
								      		<th data-field="studentCount">No. of Students</th>
								    	</tr>
								  	</thead>
								  	<tbody>
								  	{
								  		this.state.schedPerFIC.map((item,index)=>{
								  			return(<tr key={index}>
								  				<td>{item.course_no}</td>
								  				<td>{item.section}</td>
								  				<td>{item.day} {item.start_time}-{item.end_time}</td>
								  				<td>{item.current_no_of_students}/{item.max_no_of_students}</td>
								  			</tr>)
								  		})
								  	}
									</tbody>
								</Table>
							  </CollapsibleItem>
			  				</Collapsible>
						</tr>)
			  			})
				  	}
					</div>
				</div>
			</div>
		);
	}
}

export default ListSchedProf;