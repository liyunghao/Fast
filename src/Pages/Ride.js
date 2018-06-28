import React from 'react'
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
    console.log(this.state.data)
  }
  render(){
    console.log(this)
    return(
      <div>
        <CardBox />
        <RideInput confirm = {this.updateRide}/>
        <SearchBar />
      </div>
    )
  }
}
export default Ride