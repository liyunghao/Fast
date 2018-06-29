import React from 'react';
import CardItem from './CardItem'
class CardBox extends React.Component {
	constructor(props){
		super(props)
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
							key={index}
						/>
						)
						: <div></div>
				}
			</span>
		)
	}
}

export default CardBox;
