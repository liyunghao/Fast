import React from 'react';
import io from 'socket.io-client'
import ChatNavBar from '../Components/ChatNavBar'
import ChatPeople from '../Components/ChatPeople'
import ChatContent from '../Components/ChatContent'
import SendBox from '../Components/SendBox'

const image_url = "https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-9/27867151_1734407369913963_7206349640850496058_n.jpg?_nc_cat=0&oh=81a19e4055890e9762ea1b09147aad78&oe=5BB4E410";

const fake_people = [
	{
    "username" : "郭弰面",
    "user_id" : 3,
    "liked_gift": "冰激淋",
    "current_party": ["吃冰囉", "走!"],
    "past_party": ["雞雞叫", "迷克夏"],
  },
	{
		"username" : "姬旦荳釜",
    "user_id" : 4,
    "liked_gift": "卡娜赫拉 <3",
    "current_party": ["小七集點!!"],
    "past_party": ["卡納赫拉團購~"],
  }
]


class Chatting extends React.Component{
	constructor(props){
		super(props);

		this.state = {
		chat : {
			"username" : "",
    		"user_id" : 0,
    		"liked_gift": "",
    		"current_party": [""],
    		"past_party": [""],
		},
			InputMes :　"",
			MesRecord : [""],
			socket: io()
		}
		this.ChangeChat = this.ChangeChat.bind(this)
		this.updateMes = this.updateMes.bind(this)
		this.updateRecord = this.updateRecord.bind(this)
	}

	ChangeChat(t){
		this.setState({
			chat: fake_people.filter(value => (value.user_id === t))[0]
		})
	}

	updateMes(t){
		this.setState({InputMes : t})
	}

	updateRecord(t){
	    t.preventDefault();
		const final = this.state.MesRecord.concat(this.state.InputMes)
		this.setState({MesRecord: final})
		this.setState({InputMes: ""})
		console.log(this.state.MesRecord)
	}

	render() {
		return(
			<div>
				<div className="row">
				{
					fake_people.length > 0?
						fake_people.map( data =>
							(<ChatNavBar key = {data.user_id} name = {data.username} image = {image_url} id = {data.user_id} onbtnClick = {this.ChangeChat}/>)
						)
					:<div></div>
				}
				</div>
				<div className="row">
				<div className="col-8">
					<ChatContent showMes = {this.state.MesRecord}/>
					<SendBox mes = {this.state.InputMes} changeMes = {this.updateMes} handleClick = {this.updateRecord}/>
				</div>
					<ChatPeople item = {this.state.chat} img = {image_url}/>
				</div>
			</div>
		)
	}
}

export default Chatting;
