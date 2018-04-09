import React, { Component } from 'react';
import { Modal, Button, Input, Icon } from 'react-materialize';
import './css/ConfirmUpdate.css';

class ConfirmUpdate extends Component{
	/*constructor(props){
		super(props);
	}*/

	handleYes(){
		window.Materialize.toast("Updated!",3000);
	}

	render(){
		return(
			<Modal
				header='Confirm Updates'
				bottomSheet
				trigger={<Button id="s2"  className="modal-action modal-close" waves='light'>Save</Button>}
			>
			
				<div className="saveChanges">
					<form>
						Hi Admin, please re-enter your ICSRA password to save the changes.
						<Input label="Password" type="password" validate />
						<div id="s1">
						  <Button className="modal-action modal-close">
						  	<Icon>send</Icon>&nbsp;&nbsp;Save
						  </Button>
						</div>
						<div id="c1">
						  <Button className="modal-action modal-close">
						  	<Icon>cancel</Icon>&nbsp;&nbsp;Cancel
						  </Button>
						</div>
					</form> 
				</div>
			</Modal>
		)
	}
}

export default ConfirmUpdate;