import React from 'react';
import './appHeader.scss';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

const AppHeader = ({ items }) => {
	let total = 0;
	items.map((item) => {
		return total = total + item.price * item.amount;
	})
	let totalItems = 0;
	items.map((item) => {
		return totalItems = totalItems + item.amount
	})
	return (
		<div className='navWrapper'>
			<div className='navBar'>
				<ul className='navList'>
					<li className='navItem'><Link to='/'>Main Page</Link></li>
					<li className='navItem'><Link to='/cart'>Cart</Link></li>
					<li className='navItem badge'>{totalItems}</li>
					<li className='navItem'>Total: {total}$</li>
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