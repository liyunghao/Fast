import React from 'react'
class RideInput extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      _data: {
        title: '',
        from: '',
        to: '',
        time_start: '',
        time_end: '',
        description:'',
        vehicle:'',
        num_passenger_max:''
      }
    }
    this.updateTitle = this.updateTitle.bind(this)
    this.updateLocation = this.updateLocation.bind(this)
    this.updateDest = this.updateDest.bind(this)
    this.updateStartTime = this.updateStartTime.bind(this)
    this.updateEndTime = this.updateEndTime.bind(this)
    this.updateDescription = this.updateDescription.bind(this)
    this.updateVehicle = this.updateVehicle.bind(this)
    this.updateMaxPass = this.updateMaxPass.bind(this)
  }
  resetData(){
    this.setState({ _data: {} })
  }
  updateTitle(e){
    let tmp = this.state._data
    tmp.title = e
    this.setState({ _data: tmp })
  }
  updateLocation(e){
    let tmp = this.state._data
    tmp.from = e
    this.setState({ _data: tmp})
  }
  updateDest(e){
    let tmp = this.state._data
    tmp.to = e
    this.setState({ _data: tmp})
  }
  updateStartTime(e){
    let tmp = this.state._data
    let t = new Date(e)
    tmp.time_start = t.getTime()
    this.setState({ _data: tmp})
  }
  updateEndTime(e){
    let tmp = this.state._data
    let t = new Date(e)
    console.log(t)
    tmp.time_end= t.getTime()
    this.setState({ _data: tmp})
  }
  updateDescription(e){
    let tmp = this.state._data
    tmp.description = e
    this.setState({ _data: tmp})
  }
  updateVehicle(e){
    let tmp = this.state._data
    tmp.vehicle= e
    this.setState({ _data: tmp})
  }
  updateMaxPass(e){
    let tmp = this.state._data
    tmp.num_passenger_max = e
    this.setState({ _data: tmp})
  }
  render(){
    //console.log(this.state)
    return(
      <div>
        <div className='bt'>
          <button type="button" className="btn btn-primary RideButton" data-toggle="modal" data-target="#exampleModalCenter">
            揪團
          </button>
        </div>
				<div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
					<div className="modal-dialog modal-dialog-centered" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="exampleModalCenterTitle">揪團資訊</h5>
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
                <div className="input-group input-group-sm mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-sm">標題</span>
                  </div>
                  <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"  value = {this.state._data.title} onChange={ (e) => this.updateTitle(e.target.value)} />
                </div>
                <div className="input-group input-group-sm mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-sm">起始地</span>
                  </div>
                  <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" value = {this.state._data.from} onChange={ (e) => this.updateLocation(e.target.value)} />
                </div>
                <div className="input-group input-group-sm mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-sm">目的地</span>
                  </div>
                  <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" value = {this.state._data.to} onChange={ (e) => this.updateDest(e.target.value)} />
                </div>
                <div className="input-group input-group-sm mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-sm">開始時間</span>
                  </div>
                  <input type="datetime-local" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={ (e) => this.updateStartTime(e.target.value)} />
                </div>
                <div className="input-group input-group-sm mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-sm">結束時間</span>
                  </div>
                  <input type="datetime-local" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={ (e) => this.updateEndTime(e.target.value)} />
                </div>
                <div className="input-group input-group-sm mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-sm">交通工具</span>
                  </div>
                  <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" value = {this.state._data.vehicle} onChange={ (e) => this.updateVehicle(e.target.value)} />
                </div>
                <div className="input-group input-group-sm mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-sm">限乘人數</span>
                  </div>
                  <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" value = {this.state._data.num_passenger_max} onChange={ (e) => this.updateMaxPass(e.target.value)} />
                </div>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">備註</span>
                  </div>
                  <textarea className="form-control" aria-label="With textarea" value = { this.state._data.description } onChange={ (e) => this.updateDescription(e.target.value)} ></textarea>
                </div>
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
								<button type="button" className="btn btn-primary" data-dismiss="modal" onClick = { () => { this.props.confirm(this.state._data); this.setState({_data: {
                                                                                                                title: '',
                                                                                                                from: '',
                                                                                                                to: '',
                                                                                                                time_start: '',
                                                                                                                time_end: '',
                                                                                                                description:'',
                                                                                                                vehicle:'',
                                                                                                                num_passenger_max:''
                                                                                                              }});}}>Save changes</button>
							</div>
						</div>
					</div>
				</div>
			</div>
    )
    console.log(this.state)
  }

}

export default RideInput
