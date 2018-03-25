import React, { Component } from 'react';
import {Input, MediaBox, Table, Dropdown, NavItem, Button, Icon, Modal} from 'react-materialize';
import NumericInput from 'react-numeric-input'; //npm install react-numeric-input --save
import './EditProfile.css';
import TopNav from './TopNav.js';
// import ImageUpload from './ImageUpload.js';

class ListItem extends Component{
	render(){
	    return(
	      <NavItem key={this.props.key}>{this.props.itemContent}</NavItem>
	    );
  }
}

class MapSubjectsList extends Component{
	render(){
		const { data: subjectSet } = this.props;

	    return(
	      <div> 
		        {
		        	subjectSet.map((subject) => {
		        		return (
		        			<ListItem
		        				key={subject.id}
		        				itemContent={subject.code} />
		        		);
		        	})
		        }
		  </div>
	    );
	}
}

class MapPositionsList extends Component{
	render(){
		const { data: positionSet } = this.props;

	    return(
	      <div> 
		        {
		        	positionSet.map((position) => {
				        return (
				        	<ListItem
				        		key={position.id}
				        		itemContent={position.pos} />
				        );
		        	})
		        }
		  </div>
	    );
	}
}

class MapStatusList extends Component{
	render(){
		const { data: statusSet } = this.props;

	    return(
	      <div> 
		        {
		        	statusSet.map((status) => {
		        		return (
		        			<ListItem
		        				key={status.id}
		        				itemContent={status.stat} />
		        		);
		        	})
		        }
		  </div>
	    );
	}
}

class EditProfile extends Component {

	constructor(props){
		super(props)
		this.state = {
			name: "MR. FIRST M. LASTNAME",
			pic: "https://static.useresponse.com/public/2026agenda/avatars/default-avatar.svg",
			empNo: "0000000000",
			rank: "Instructor",
			status: "Active",
			teachingLoad: 6,
			studyLoad: 3,
			preferredSubjects:
				{
					first: "CMSC 100",
					second: "CMSC 128",
					third: "CMSC 132"
				}
		}
	}

	render() {
		//sample subjects only
		const subjects=[
			{code: "CMSC 100", id: 1},
			{code: "CMSC 125", id: 2},
			{code: "CMSC 128", id: 3},
			{code: "CMSC 132", id: 4},
			{code: "CMSC 170", id: 5}
		];

		//sample positions
		const positions=[
			{pos: "Assistant Professor", id: 1},
			{pos: "Professor", id: 2},
			{pos: "Instructor", id: 3},
			{pos: "Assistant Instructor", id: 4}
		]

		const statuses=[
			{stat: "Active", id: 1},
			{stat: "On Leave", id: 2},
			{stat: "Retired", id: 3}			
		];

	    return (
			<div>
				<TopNav/>			
				<main className="feed">
					<row0 class="input-field">
						<Input id="name" label="Name" validate defaultValue={this.state.name} />
					</row0>
					<row1>
						<Button class="btn" type="cancel" node="a" href="/home">
							Cancel
						</Button>
					</row1>
					<hr className="hr" />

					<leftCol>
						<media>
							<MediaBox disable id="pic" src={this.state.pic} caption="profile picture" />
							<Modal
								header='Change Profile Picture'
								bottomSheet
								trigger={<Button data-position="right" data-delay="20" data-tooltip="Change profile picture" floating id="picButton" class="custom-file-input"> <Icon>add_a_photo</Icon> </Button>}>
								<form action='#'>
									<div class="file-field input-field">
										<div class="btn">
											<span>File</span>
											<input type="file" />
										</div>
										<div class="file-path-wrapper">
											<input class="file-path validate" type="text" />
										</div>
										<span class="btn">Upload</span>
								   </div> 
								</form> 
							</Modal>
						</media>
						<br />
						<Table>
					  		<tbody>
						    <tr>
						      <td>Employee No.:</td>
						      <td>{this.state.empNo}</td>
						    </tr>
						    <tr>
						      <td>Rank:</td>
						      <td>			
						      	<Dropdown trigger={<Button>{this.state.rank}</Button>}>
									<NavItem className="current" node="a" href="#!"><p>{this.state.rank}</p></NavItem>
									<NavItem divider />
									<MapPositionsList 
										data={positions}
									/>
								</Dropdown>				
						      </td>
						    </tr>
						    <tr>
						      <td>Status:</td>
						      <td>
								<Dropdown trigger={<Button>{this.state.status}</Button>}>
									<NavItem className="current" node="a" href="#!"><p>{this.state.status}</p></NavItem>
									<NavItem divider />
									<MapStatusList 
										data={statuses}
									/>
								</Dropdown>	
						      </td>
						    </tr>
						    <tr>
						      <td>Teaching Load:</td>
						      <td className="input-field"><NumericInput className="form-control" mobile min={0} step={1} precision={3} value={this.state.teachingLoad}/></td>
						    </tr>
						    <tr>
						      <td>Study Load:</td>
						      <td className="input-field"><NumericInput className="form-control" mobile min={0} step={1} precision={3} value={this.state.studyLoad}/></td>
						    </tr>
						    <tr>
						      <td>Preferred Subjects:</td>
						      <td>
						      	<Dropdown trigger={<Button>{this.state.preferredSubjects.first}</Button>}>
									<NavItem className="current" node="a" href="#!"><p>{this.state.preferredSubjects.first}</p></NavItem>
									<NavItem divider />
									<MapSubjectsList data={subjects}/>
								</Dropdown>
						      </td>
						    </tr>
						    <tr>
						      <td></td>
						      <td>
						      	<Dropdown trigger={<Button>{this.state.preferredSubjects.second}</Button>}>
									<NavItem className="current" node="a" href="#!"><p>{this.state.preferredSubjects.second}</p></NavItem>
									<NavItem divider />
									<MapSubjectsList data={subjects}/>
								</Dropdown>
						      </td>
						    </tr>
						    <tr>
						      <td></td>
						      <td>
						      	<Dropdown trigger={<Button>{this.state.preferredSubjects.third}</Button>}>
									<NavItem className="current" node="a" href="#!"><p>{this.state.preferredSubjects.third}</p></NavItem>
									<NavItem divider />
									<MapSubjectsList data={subjects}/>
								</Dropdown>
						      </td>
						    </tr>
						  </tbody>
						</Table>
						<br />
						<br />
						<Modal
							header='Save Account Changes'
							bottomSheet
							trigger={<Button>Save Account Changes</Button>}>
							<div className="saveChanges">
								<form>
									Please re-enter your ICSRA password to save changes to your account.
									<Input label="Password" type="password" validate />

									<div className="s1">
									  <Button class="btn" type="submit" node="a" href="/home" onclick="Materialize.toast('Changes saved', 4000)">
									  	<Icon>send</Icon>&nbsp;&nbsp;Save
									  </Button>
									</div>
									<div className="c1">
									  <Button class="btn" type="cancel" node="a" href="">
									  	<Icon>cancel</Icon>&nbsp;&nbsp;Cancel
									  </Button>
									</div>
								</form> 
							</div>
						</Modal>
						<br />
						<br />
					</leftCol>


					<rightCol>
						SCHEDULE
						<Table striped="true">
						  <thead>
						    <tr>
						      <th data-field="course">Course</th>
						      <th data-field="section">Section</th>
						      <th data-field="time">Day and Time</th>
						      <th data-field="room">Room</th>
						    </tr>
						  </thead>

						  <tbody>
						    <tr>
						      <td>Alvin</td>
						      <td>Eclair</td>
						      <td>$0.87</td>
						      <td>a</td>
						    </tr>
						    <tr>
						      <td>Alan</td>
						      <td>Jellybean</td>
						      <td>$3.76</td>
						      <td>b</td>
						    </tr>
						    <tr>
						      <td>Jonathan</td>
						      <td>Lollipop</td>
						      <td>$7.00</td>
						      <td>c</td>
						    </tr>
						  </tbody>
						</Table>

						<div className="add">
							<Button disabled waves='light'>Add Consultation Hours</Button>
						</div>

						<br />
						<br />
						ADVISEES
						<Table striped="true">
						  <thead>
						    <tr>
						      <th data-field="name">Name</th>
						      <th data-field="col2">asdf</th>
						      <th data-field="col3">asdf</th>
						    </tr>
						  </thead>

						  <tbody>
						    <tr>
						      <td>Alvin</td>
						      <td>Eclair</td>
						      <td>$0.87</td>
						    </tr>
						    <tr>
						      <td>Alan</td>
						      <td>Jellybean</td>
						      <td>$3.76</td>
						    </tr>
						    <tr>
						      <td>Jonathan</td>
						      <td>Lollipop</td>
						      <td>$7.00</td>
						    </tr>
						  </tbody>
						</Table>
					</rightCol>
				</main>
			</div>
		);
	}
}

export default EditProfile;