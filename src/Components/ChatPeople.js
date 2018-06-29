import React from 'react';
import '../Css/ChatPeople.css'

class ChatPeople extends React.Component {

	render (){
		console.log(this.props.item.current_party)
		return(
				<div className = "wholeChat col-4">
					<img src = {this.props.img} className = "chatImage" />
					<div className = "chatName">{this.props.item.username}</div>
					<div>
						<span>喜歡禮物</span>
						<span>{this.props.item.liked_gift}</span>
					</div>
					<div className = "gatherNow">
						<span>目前同揪</span>
						<div className= "gatherItem">
							{this.props.item.current_party.map((data, index) => (<span key = {index}>{data}<br/></span>))}
						</div>
					</div>
					<div className = "gatherRecord">
						<span>同揪紀錄</span>
						<div className = "recordItem">
							{this.props.item.past_party.map((data, index) => (<span key = {index}>{data}<br/></span>))}
						</div>
					</div>
				</div>
		)
	}
}

export default ChatPeople;
