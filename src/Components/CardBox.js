import React from 'react';
import CardItem from './CardItem'
class CardBox extends React.Component {
	constructor(props){
		super(props)
	}
  transTime(unixTime) {
    let date = new Date(unixTime)
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();

    // Will display time in 10:30:23 format
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return formattedTime
  }
	render(){
		return (
			<span className='inline row'>
				{
					//console.log( this)
					this.props.data.length >0?
						this.props.data.map( (_data,index) =>
							<CardItem id = {_data.id}
							token={this.props.token}
							updateRides={this.props.updateRides.bind(this)}
							data = {_data}
							key = {index}
						/>
						)
						: <div></div>
				}
			</span>
		)
	}
}

export default CardBox;
