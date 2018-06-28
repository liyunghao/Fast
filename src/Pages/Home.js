import React from 'react';
import withRouter from 'react-router-dom'

class Home extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			username : "",
			password: "",
		}

		this.updateUsername = this.updateUsername.bind(this)
		this.updatePassword = this.updatePassword.bind(this)
		this.sendMes = this.sendMes.bind(this)
	}

	updateUsername(t){
		this.setState({username: t})
	}

	updatePassword(t){
		this.setState({password: t})
	}

	sendMes(){
		let parm = {
			username: this.state.username,
	    password: this.state.password
		}

		fetch('/api/login', parm)
		.then(response => {
			if(!response.ok)
				console.log("fetching error")
			return response.json
		}
		)
		.then(response => {
			this.props.updateToken(response)
		})
	}

	render(){
		return (
			<div>
				<div>
					<span>帳號</span>
					<input type = "text" onChange={ (e) => this.updateUsername(e.target.value) }/>
				</div>
				<div>
					<span>密碼</span>
					<input type = "text" onChange={ (e) => this.updatePassword(e.target.value) }/>
				</div>
				<button onClick={ this.sendMes() }>登入</button>
			</div>
		)
	}
}

export default Home;