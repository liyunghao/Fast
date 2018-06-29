import React from 'react'
import axios from 'axios'
import withRouter from 'react-router-dom'
import '../Css/Home.css'
class Home extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			username: "",
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
		console.log('hi')
		let parm = {
			username: this.state.username,
	    	password: this.state.password
		}

		axios.post('/api/login', parm)
		.then(response => {
			console.log(response)
			if(response.data.status !== "success")
				console.log("fetching error")
			this.props.updateToken(response.data)
		})
	}

	render(){
		console.log(this.state)
		return (
			<div>
				<form className = 'box' action="#">
					<div className = "form-group">
						<label htmlFor="exampleInputEmail1">Account</label>
						<input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
							placeholder="Enter your account" onChange={ (e) => this.updateUsername(e.target.value)} />
						<small id="emailHelp" className="form-text text-muted">{"We\'ll never share your personal infomation with anyone else."}</small>
					</div>
					<div className="form-group">
						<label htmlFor="exampleInputPassword1">Password</label>
						<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
						  onChange={ (e) => this.updatePassword(e.target.value) } />
					</div>

					<button className="btn btn-primary" onClick={ this.sendMes } >Submit</button>
				</form>
				{/* <div>
					<span>帳號</span>
					<input type = "text" onChange={ (e) => this.updateUsername(e.target.value) }/>
				</div>
				<div>
					<span>密碼</span>
					<input type = "password" onChange={ (e) => this.updatePassword(e.target.value) }/>
				</div>
				<button onClick={ this.sendMes }>登入</button> */}
			</div>
		)
		console.log(this.state)
	}
}

export default Home;
