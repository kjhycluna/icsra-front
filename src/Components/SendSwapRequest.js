import React, { Component } from 'react';
import {Table, Button, Modal, Row, Col} from 'react-materialize';

class SendSwapRequest extends Component {
	send(){
		window.Materialize.toast("Request Sent!",3000);
	}

	render() {
	    return (
		<div>
			<Modal
			  	header='Send Request'
			  	fixedFooter
			  	trigger={<Button waves='light'>Swap</Button>}>
			  	<Row>
				  <Col s={3} className='grid-example'>Current Course</Col>
				  <Col s={3} className='grid-example'>Section</Col>
				  <Col s={3} className='grid-example'>Time/Date</Col>
				  <Col s={3} className='grid-example'>Room</Col>
				</Row>
	        	<div>
					<Table>
					  <thead>
					    <tr>
					      <th data-field="subj">Subject</th>
					      <th data-field="sec">Section</th>
					      <th data-field="dayTime">Day/Time</th>
					      <th data-field="inst">Instructor</th>
					      <th data-field="request">Request</th>
					    </tr>
					  </thead>

					  <tbody>
					    <tr>
					      <td>CMSC 128</td>
					      <td>A1L</td>
					      <td>Mon/16:00-19:00</td>
					      <td>Hopper, Grace</td>
					      <td>
					        <Button waves='light' onClick={this.send}>Send Request</Button>
					      </td>
					    </tr>
					    
					    <tr>
					      <td>CMSC 128</td>
					      <td>A2L</td>
					      <td>Tue/16:00-19:00</td>
					      <td>Turing, Alan</td>
					      <td>
					        <Button waves='light' onClick={this.send}>Send Request</Button>
					      </td>
					    </tr>
					  
					    <tr>
					      <td>CMSC 128</td>
					      <td>A3L</td>
					      <td>Wed/10:00-13:00</td>
					      <td>Dijkstra, Edsger</td>
					      <td>
					        <Button waves='light' onClick={this.send}>Send Request</Button>
					      </td>
					    </tr>
					    
					    <tr>
					      <td>CMSC 128</td>
					      <td>A4L</td>
					      <td>Wed/13:00-16:00</td>
					      <td>Hopper, Grace</td>
					      <td>
					        <Button waves='light' onClick={this.send}>Send Request</Button>
					      </td>
					    </tr>
					    
					    <tr>
					      <td>CMSC 128</td>
					      <td>A5L</td>
					      <td>Thu/10:00-13:00</td>
					      <td>Turing, Alan</td>
					      <td>
					        <Button waves='light' onClick={this.send}>Send Request</Button>
					      </td>
					    </tr>
					  
					    <tr>
					      <td>CMSC 128</td>
					      <td>A6L</td>
					      <td>Fri/16:00-19:00</td>
					      <td>Dijkstra, Edsger</td>
					      <td>
					        <Button waves='light' onClick={this.send}>Send Request</Button>
					      </td>
					    </tr>
					  </tbody>
					</Table>
				</div>
			</Modal>

        </div>
        );
    }
}

export default SendSwapRequest;