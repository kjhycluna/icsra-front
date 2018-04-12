import React, { Component } from 'react';
import {Table} from 'react-materialize';
import TopNav from './TopNav';
import './css/SwapSchedule.css';
import SendSwapRequest from './SendSwapRequest';
import axios from 'axios';

class SwapSchedule extends Component {
	constructor(props){
		super(props)

		this.state={
			schedPerFIC:[]
		};
	}

	getSched(){
		return axios.get('../schedule/view-all-schedule')
	}
	componentWillMount(){
	  this.getSched().then((response)=>{
	    var value=response.data.data
	    this.setState({schedPerFIC:value})
	  })
	  this.setState({schedPerFIC:[]})
	}

	render() {
	    return (
		<div>
            <TopNav/>
            <div  className="swapSchedule">
            	<div className="swapPageTitle">
            		SWAP SCHEDULE
            	</div>
            	<div className="swapScheduleList">
            		<Table>
						<thead>
    						<tr>
					      		<th data-field="subject">Subject</th>
					      		<th data-field="section">Section</th>
					      		<th data-field="day&time">Day & Time</th>
					      		<th data-field="room">Room</th>
					      		<th data-field="swap">Swap</th>
					    	</tr>
					  	</thead>
					  	<tbody>
					  	{
					  		this.state.schedPerFIC.map((item,index)=>{
					  			return(<tr key={index}>
					  				
					  				<td>{item.course_no}</td>
					  				<td>{item.section}</td>
					  				<td>{item.day}  {item.start_time}-{item.end_time}</td>
					  				<td>{item.room}</td>
					  				<td><SendSwapRequest /></td>
					  			</tr>)
					  		})
					  	}
						</tbody>
					</Table>
            	</div>
            </div>
        </div>
    	);
    }
}
export default SwapSchedule;