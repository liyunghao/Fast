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
					this.props.Data.length >0?
						this.props.Data.map( (_data,index) =>
							<CardItem veh = {_data.vehicle} pstart = {_data.from} pend = {_data.to} start ={ _data.time_start} dest = {_data.time_end} name = {_data.title} excerpt = { _data.description} key={index}/>
						)
						: <div></div>
				}
			</span>
		)
	}
}

export default CardBox;