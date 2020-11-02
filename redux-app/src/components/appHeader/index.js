import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext'
import './appHeader.scss';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

const AppHeader = ({ items }) => {
	const auth = useContext(AuthContext)
	let total = 0;
	items.map((item) => {
		return total = total + item.price * item.amount;
	})
	let totalItems = 0;
	items.map((item) => {
		return totalItems = totalItems + item.amount
	})
	const logoutHandler = (event) => {
		event.preventDefault()
		auth.logOut()
	}
	return (
		auth.isAuthenticated ?
			(<div className='navWrapper'>
				<div className='navBar'>
					<ul className='navList'>
						<li className='navItem'><Link to='/'>Main Page</Link></li>
						<li className='navItem'>
							<Link to='/cart'>Cart</Link>
							<div className='navItem badge'>{totalItems}</div>
						</li>
						<li className='navItem'>Total: {total}$</li>
						<li className='navItem'>
							<Link
								to='/auth'
								onClick={logoutHandler}>Log out</Link>
						</li>
					</ul>
				</div>
			</div >)
			:
			(
				<div className='navWrapper'>
					<div className='navBar'>
						<ul className='navList'>
							<li className='navItem'><Link to='/auth'>Authenticate</Link></li>
						</ul>
					</div>
				</div>
			)
	)
}

const mapStateToprops = ({ items }) => {
	return {
		items
	}
}

export default connect(mapStateToprops)(AppHeader);