import React from 'react'
import axios from 'axios'
import CardBox from '../Components/CardBox'
import SearchBar from '../Components/SearchBar'
import RideInput from '../Components/RideInput'
class Ride extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      data:[]
    }
    this.updateRide = this.updateRide.bind(this)
  }
  updateRide(e){
    var params = {
      token: this.props.token,
      title: e.title,
      time_start: e.startTime,
      time_end: e.endTime,
      from: e.location,
      to: e.dest,
      description: e.description,
      vehicle: e.vehicle,
      num_passenger_max: e.maxPass
    }
    axios.post('/api/ride', params).then(function(response) {
      console.log(response.data)
      return axios.get('/api/ride')
    }).then((response) => {
      console.log(response)
      this.setState({data:response.data.data})
    })
  }

  componentDidMount () {
    axios.get('/api/ride')
    .then((response) => {
      console.log(response)
      this.setState({data:response.data.data})
    })
  }
  render(){
    // console.log(this)
    return(
      <div>
        <CardBox data = {this.state.data}/>
        <RideInput confirm = {this.updateRide}/>
        <SearchBar />
      </div>
    )
  }
}
export default Ride
