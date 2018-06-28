import React from 'react'


class SearchBar extends React.component{
	constructor(props){
		super(props)
		this.state = {
			data:[{
				title: '',
				location: '',
				dest: '',
				start_time: '',
				end_time: '',
				description:'',
				vehicle:'',
				max_pass:''
			}]
		}
		this.updateDropdownTitle = this.updateDropdownTitle.bind(this)
	}
	updateDropdownTitle(t){
		this.setState({ dropdownTitle: t })
	}
	render(){
		return(
			<div className='container'>
				<div className='row'>
				<div className='col-1' />
					<div className='input-group col-9'>
					<div className='col-1' />
						<input className=" radi form-control col-10" type="text"  onChange={ (e) => this.props.onWordChange(e.target.value) }/>
						
						<button className=' radi  btn btn-info text-center' onClick={ () => this.props.onSearch()  } >搜尋</button>
						<div className='col-1' />
						<button className=' radi btn btn-success  col-2' onClick={ () => } >揪團</button>

					</div>
						
				</div>
			</div>
		)
	}
}

export default SearchBar