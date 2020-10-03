import React from 'react';
import './appHeader.scss';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

const AppHeader = ({ items }) => {
	return (
		<div className='navWrapper'>
			<div className='navBar'>
				<ul className='navList'>
					<li className='navItem'><Link to='/'>Main Page</Link></li>
					<li className='navItem'><Link to='/cart'>Cart</Link></li>
					<li className='navItem'>Total: {items.map()}$</li>
				</ul>
			</div>
		</div>
	)
}

const mapStateToprops = ({ items }) => {
	return {
		items
	}
}

export default connect(mapStateToprops)(AppHeader);