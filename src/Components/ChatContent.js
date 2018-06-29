import React from 'react';

class ChatContent extends React.Component {
	render (){
		return(
				<div>
					{this.props.showMes.map((data, index) => (<div key = {index}>{data}<br/></div>))}
				</div>
		)
	}
}

export default ChatContent;
