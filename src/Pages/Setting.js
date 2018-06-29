import React from 'react'

<<<<<<< HEAD
class Setting extends React.Component {




	constructor(props) {
    super(props);
   
    this.state = {
      rando :'',
      text: '',
      lift: []
    }
    this.updateDropdownTitle = this.updateDropdownTitle.bind(this)
     this.updateText = this.updateText.bind(this)
      this.setlift = this.setlift.bind(this)
  }
	updateDropdownTitle(t){
		this.setState({ rando: t })
	}
	updateText(t){
			this.setState({text: t})

	}
	setlift(){
		let tmp = this.state.lift
		tmp.push(this.state.text)
		this.setState({lift:tmp})
	}
	

			
render(){
		return(
				<div >
	{console.log(this.state.lift)}
    <div className='container'>我喜歡收到什麼禮物</div>
    <div className='container'>
    <div className='row'>
    <div className='col-9'>
    <input value={this.state.text} className='mx-auto  col-9  in' type='text' onChange={ (e) => this.updateText(e.target.value) }></input>
    <button className=' btn btn-success   col-2'  onClick={this.setlift} >新增</button>
    </div>
    </div>
    </div>
    <div className='container'>
    {this.state.lift}
	</div>
	
    <div Name="recordbox">
    <ul className="myrecordul">
      <li className='myrecordli1'>現有點數:197點</li>
      <br/>
      <li className='myrecordli2'>我的評分:4.9/5</li>
      <br/>
      <li className='myrecordli3'>交通記錄: 2018/6/25 和甜不辣、雞蛋豆腐、湯圓去  巨城</li>
      <br/>
      <div className="floattoright">

        <li className='myrecordli4'>2018/5/30   和鍋燒面去清頁</li>
        <br/>
        <li className='myrecordli5'>2018/5/24   和張於燒去  揪團去吃冰</li>
        <br/>
        <li class='myrecordli6'>2018/4/02  和鹽酥雞當了一段walk buddy</li>
      </div>
    </ul> 
    </div>
</div>
		)
	}
}

=======
class Setting extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      name:'',
      id:'',
      point:'',
      rating:'',
      record:'',
      now:''
    }
  }
}
>>>>>>> 12d92f976cc751ae0f22bafd66d2d2142dfe3153
export default Setting