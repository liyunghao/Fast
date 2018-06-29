import React from 'react'

import { withRouter,Link } from 'react-router-dom'
import '../Css/NavBar.css'

const NavItem = withRouter((props) =>(
	<Link to={props.anchor}>
		<div className={`InNav m-0 ${props.location.pathname===props.anchor&&'active'}`}>
			{props.name}
    	</div>
    </Link>
	))

const NavBar = ()=>(
		<div className = 'col-sm-2 navBar'>
		    <NavItem name='開團' anchor='/Ride'/>
		    <NavItem name='聊聊' anchor='/Chatting'/>
	        <NavItem name='設定' anchor='/Setting'/>
        </div>
	)

export default NavBar