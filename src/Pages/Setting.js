import React from 'react'
import '../Css/Setting.css'
class Setting extends React.Component {




	constructor(props) {
    super(props);
   
    this.state = {
      rando :'',
      text: '',
    }
    this.updateDropdownTitle = this.updateDropdownTitle.bind(this)
    this.updateText = this.updateText.bind(this)
  
  }
	updateDropdownTitle(t){
		this.setState({ rando: t })
	}
	updateText(t){
			this.setState({text: t})

	}
			
render(){
		return(
		  <div>
        <span className = 'text'>我喜歡收到什麼禮物</span>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <textarea value={this.state.text} className='mx-auto  col-9  textbox' type='text' onChange={ (e) => this.updateText(e.target.value) }></textarea>
                {/* <button className=' btn btn-success  ' onClick={this.setlift} >更新</button> */}
              </div>
            </div>
          </div>
          <div className='container'>
          {/* {this.state.lift} */}
          </div>
    
        <div className="recordbox">
          <ul className="list-group">
            <li className='list-group-item'>現有點數:197點</li>
            <br/>
            <li className='list-group-item'>我的評分:4.9/5</li>
            <br/>
            <li className='list-group-item'>交通記錄: 2018/6/25 和甜不辣、雞蛋豆腐、湯圓去  巨城</li>
            <br/>
            <li className='list-group-item'>2018/5/30   和鍋燒面去清頁</li>
            <br/>
            <li className='list-group-item'>2018/5/24   和張於燒去  揪團去吃冰</li>
            <br/>
            <li className='list-group-item'>2018/4/02  和鹽酥雞當了一段walk buddy</li>
          </ul> 
        </div>
    </div>
		)
	}
}

export default Setting