import React from 'react';
import CardItem from './CardItem'
class CardBox extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			Data : [
				{
						"status": "succeed",
						"data": 
						{
						"id": 1,
						"title": "烏骨雞",
						"time_start": '1:50',
						"time_end": '2:50',
						"description": null,
						"from": '交大',
						"to": '火車站',
						"vehicle": '汽車',
						"num_passenger_max": null,
						"created_at": "2018-06-28T07:27:30.265Z",
						"updated_at": "2018-06-28T07:27:30.265Z"    
						}
						
				},
				{
				
						"status": "succeed",
						"data": 
						{
						"id": 2,
						"title": "麻油雞",
						"time_start": '3:40',
						"time_end": '4:40',
						"description": null,
						"from": '交大',
						"to": '火車站',
						"vehicle": '機車',
						"num_passenger_max": null,
						"created_at": "2018-06-28T07:27:30.265Z",
						"updated_at": "2018-06-28T07:27:30.265Z"    
						}
						
				},
				{

						"status": "succeed",
						"data": 
						{
						"id": 3,
						"title": "雞蛋豆腐",
						"time_start": '5:00',
						"time_end": '6:00',
						"description": '',
						"from": '交大',
						"to": '清大',
						"vehicle": '機車',
						"num_passenger_max": null,
						"created_at": "2018-06-28T07:27:30.265Z",
						"updated_at": "2018-06-28T07:27:30.265Z"    
						}
						
				}
			]
		}
	}
	

	render(){
		return (
			<span className='inline row'>
				{
					//console.log( this)
					this.state.Data.length >0?
						this.state.Data.map( (_data,index) =>
							<CardItem veh = {_data.data.vehicle} pstart = {_data.data.from} pend = {_data.data.to} start ={ _data.data.time_start} dest = {_data.data.time_end} name = {_data.data.title} excerpt = { _data.data.description} key={index}/>
						)
						: <div></div>
				}
			</span>
		)
	}
}

export default CardBox;