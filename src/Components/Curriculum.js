import React, { Component } from 'react';						//default
import { Button} from 'react-materialize';				//use react-materialize.github.io
import './css/Curriculum.css';										//css file of your component
import TopNav from './TopNav';									//default

class Curriculum extends Component {
	render() {
		return (
			<div>
				<TopNav/>
					
				<div className="feed">

					<div className="page">
						<div className="uploadFileText">
							Upload curriculum:
						</div>

						<div className="fileButton">
							<form action="#">
	    						<div class="file-field input-field">
	      							<div className="uploadFile">
	      								<div class="btn">
	        								<span>File</span>
	        								<input type="file">
	        								</input>
	      								</div>
	
	      								<div class="file-path-wrapper">
							        		<input class="file-path validate" type="text">
							      			</input>
							      		</div>
	      							</div>

							      	<div className='uploadButton'>
					  					<Button waves='light'>Upload</Button>
									</div>
							   	</div>
							</form>
						</div>

					</div>

				</div>
			</div>
		);
	}
}

export default Curriculum;