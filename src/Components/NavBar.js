import React from 'react'

import { withRouter,Link } from 'react-router-dom'

const NavItem = withRouter((props) =>(
	<Link to={props.anchor}>
		<div className={`nav-item ${props.location.pathname===props.anchor&&'active'}`}>
			{props.name}
    	</div>
    </Link>
	))

const NavBar = ()=>(
		<div className='nav'>
		    <NavItem name='開團' anchor='/Ride'/>
		    <NavItem name='聊聊' anchor='/Chatting'/>
            <NavItem name='設定' anchor='/Setting'/>
	    </div>
	)

export default NavBar