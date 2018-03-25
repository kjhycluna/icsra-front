import React, { Component } from 'react';
import {Table} from 'react-materialize';
import TopNav from './TopNav';
import './SwapSchedule.css';
import SendSwapRequest from './SendSwapRequest';

class SwapSchedule extends Component {


	render() {
	    return (
		<div>
            <TopNav/>
            <div  className="swapSchedule">
            	<div className="swapPageTitle">
            		SWAP SCHEDULE
            	</div>
            	<div className="swapScheduleList">
            		<Table striped="true">
					  <thead>
					    <tr>
					      <th data-field="course">Course</th>
					      <th data-field="section">Section</th>
					      <th data-field="time">Day and Time</th>
					      <th data-field="room">Room</th>
					      <th data-field="swap"></th>
					    </tr>
					  </thead>

					  <tbody>
					    <tr>
					      <td>Course A</td>
					      <td>Section 1A</td>
					      <td>date/time</td>
					      <td>Room 1</td>
					      <td>
					      	<SendSwapRequest/>
					      </td>
					    </tr>
					    <tr>
					      <td>Course A</td>
					      <td>Section 2A</td>
					      <td>date/time</td>
					      <td>Room 2</td>
					      <td>
					      	<SendSwapRequest/>
					      </td>
					    </tr>
					    <tr>
					      <td>Course A</td>
					      <td>Section 3A</td>
					      <td>date/time</td>
					      <td>Room 3</td>
					      <td>
					      	<SendSwapRequest/>
					      </td>
					    </tr>
					  </tbody>
					</Table>
            	</div>
            </div>
        </div>
    	);
    }
}
export default SwapSchedule;