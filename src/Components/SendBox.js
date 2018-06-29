import React from 'react';

class SendBox extends React.Component {
	render (){
		return(
				<div>
					<input type = "text" onChange = {(e) => this.props.changeMes(e.target.value)} value = {this.props.mes}/>
					<button onClick = {this.props.handleClick}>送出</button>
				</div>
		)
	}
}

export default SendBox;