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
    let tmp = this.state.data
    tmp.push(e)
    this.setState( {  data: tmp })
    // console.log(this.state.data)
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
