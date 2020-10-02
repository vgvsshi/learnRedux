import React from 'react';
import './appHeader.scss';
import { Link } from "react-router-dom";

const AppHeader = () => {
	return (
		<div className='navWrapper'>
			<div className='navBar'>
				<ul className='navList'>
					<li className='navItem'><Link to='/'>Main Page</Link></li>
					<li className='navItem'><Link to='/cart'>Cart</Link></li>
					<li className='navItem'>Total: 50$</li>
				</ul>
			</div>
		</div>
	)
}

export default AppHeader;