import React from 'react';
import '../Css/ChatNavBar.css';

class ChatNavBar extends React.Component {
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick() {
		this.props.onbtnClick(this.props.id)
	}

	render (){
		return(
			<div className = "Peoplebutton">
				<button onClick = {this.handleClick} className = "btn btn-light btndetail">
						<img src={this.props.image} className = "PeopleImage"/>
						<div>
							{this.props.name}
						</div>
				</button>
			</div>
		)
	}
}

export default ChatNavBar;