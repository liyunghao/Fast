import React from 'react';
import '../Css/Chat.css'

class ChatContent extends React.Component {
	render (){
		return(
			<div className = "chatContent">
				{this.props.showMes.map((data, index) => (<div key = {index}>{data}<br/></div>))}
			</div>
		)
	}
}

export default ChatContent;
