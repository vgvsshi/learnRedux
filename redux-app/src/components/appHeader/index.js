import React from 'react';
import './appHeader.scss';

const AppHeader = () => {
	return (
		<div className='navWrapper'>
			<div className='navBar'>
				<ul className='navList'>
					<li className='navItem'>Main Page</li>
					<li className='navItem'>Cart</li>
					<li className='navItem'>Total: 50$</li>
				</ul>
			</div>
		</div>
	)
}

export default AppHeader;