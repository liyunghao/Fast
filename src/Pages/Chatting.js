import React from 'react';
import ChatNavBar from '../Components/ChatNavBar'
import ChatPeople from '../Components/ChatPeople'
import ChatContent from '../Components/ChatContent'
import SendBox from '../Components/SendBox'

const image_url = "https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-9/27867151_1734407369913963_7206349640850496058_n.jpg?_nc_cat=0&oh=81a19e4055890e9762ea1b09147aad78&oe=5BB4E410";

const fake_people = [
	{
    "username" : "郭弰面",
    "user_id" : 3,
<<<<<<< HEAD
    "image_url" : ["https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-9/11694929_848518688559889_8720438967524717892_n.jpg?_nc_cat=0&oh=7f27622cff7f2ad3a7794747ce579438&oe=5BA83DBB"],
=======
>>>>>>> cf33f12cfba03ba5f8fcfe521688affe9fc69da7
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
			MesRecord : ""
		}

		this.ChangeChat = this.ChangeChat.bind(this)
	}

	ChangeChat(t){
		this.setState({
			chat: fake_people.filter(value => (value.user_id === t))[0]
		})
	}

	render() {
		return(
			<div>
				{
						fake_people.length > 0?
<<<<<<< HEAD
							fake_people.map( data =>
								(<ChatNavBar key = {data.user_id} name = {data.username} image = {data.image_url} id = {data.user_id} onbtnClick = {this.ChangeChat}/>)
=======
							fake_people.map( data => 
								(<ChatNavBar key = {data.user_id} name = {data.username} image = {image_url} id = {data.user_id} onbtnClick = {this.ChangeChat}/>)
>>>>>>> cf33f12cfba03ba5f8fcfe521688affe9fc69da7
							)
							:<div></div>
				}
				<ChatPeople item = {this.state.chat} img = {image_url}/>
				<ChatContent />
				<SendBox />
			</div>
		)
	}
}

export default Chatting;
