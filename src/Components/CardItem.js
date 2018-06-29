import React from 'react'
import './fast_card.css'

class CardItem extends React.Component{
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
            <a href="#" className=" btn btn-primary fast-btn fast-btn-left">駕駛++</a>
            <a href="#" className="btn btn-primary fast-btn fast-btn-right">乘客++</a>
          </div>
        </div>
      </div>
    )
  }
}
export default CardItem
