import React from 'react'
import axios from 'axios'
import './fast_card.css'

class CardItem extends React.Component{
  joinRide(rideId, isDriver) {
    let url = '/api/ride/' + rideId.toString()
    let params = {
      is_driver: isDriver,
      token: this.props.token
    }
    axios.put(url, params).then((response) => {
      console.log(response)
      this.props.updateRides()
    })
  }
  render(){
    console.log(this.props)
    return(
      <div className = 'col-4'>
        <div className="card fast-card">
          <div className="row">
            <h4 className= "col-12 card-title text-center">{this.props.name}</h4>
          </div>
          <div className="row">
            <p className= "col-12 text-center">{this.props.veh}</p>
          </div>
          <div className="row">
            <p className="col-5 text-center">{this.props.pstart}</p>
            <p className="col-2 text-center">~</p>
            <p className="col-5 text-center">{this.props.pend}</p>
          </div>
          <div className="row">
            <p className="col-6 card-text text-center">{ this.props.start }</p>
            <p className="col-6 card-text text-center">{ this.props.dest }</p>
          </div>
          <div className="row">
            <p className="col-12 text-center">{ this.props.excerpt }</p>
          </div>
            <div >
            <a href="#" className=" btn btn-primary fast-btn fast-btn-left" onClick={() => this.joinRide.bind(this)(this.props.id, 1)}>駕駛++</a>
            <a href="#" className="btn btn-primary fast-btn fast-btn-right" onClick={() => this.joinRide.bind(this)(this.props.id, 0)}>乘客++</a>
          </div>
        </div>
      </div>
    )
  }
}
export default CardItem
