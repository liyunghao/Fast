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
    this.setState( (prevState) => {
      console.log(prevState.data)
      return { data: [...prevState.data, e] }
   })
  }
  render(){
    console.log(this.state.data)
    return(
      <div>
        <CardBox Data = {this.state.data}/>
        <RideInput confirm = {this.updateRide}/>
        <SearchBar />
      </div>
    )
  }
}
export default Ride