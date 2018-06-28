import React from 'react'

class CardItem extends React.Component{
  render(){
    console.log(this.props)
    return(
      <div className = 'inline-block Container'>
        <div>
          <div className="card" style={{width: 18+'em', margin: 4 +'px'}}>
            <div className="row card-body">
              <h5 className= "col-6 card-title" style={{width: 5+'em', margin: 1+'px'}}>{this.props.name}</h5>
              <p className= "col-5">{this.props.veh}</p>
              <p className="col-6 card-text">{ this.props.start }</p>
              <p className="col-5">{this.props.pstart}</p>
              <p className="col-6 card-text">{ this.props.dest }</p>
              <p className="col-5">{this.props.pend}</p>
              <p>{ this.props.excerpt }</p>
            </div>
              <div >
              <a href="#" className=" btn btn-primary" style={{width: 8+'em' , margin: 4 + 'px'}}>駕駛++</a>
              <a href="#" className="btn btn-primary" style={{width: 8+'em' , margin: 2 + 'px'}}>乘客++</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default CardItem