import React from 'react';
import AppHeader from '../appHeader';
import { Switch } from "react-router-dom";
import UseRoutes from '../../routes'
import { productLoaded, categoryLoaded } from '../../actions';
import { connect } from 'react-redux';
import './app.scss';
import 'materialize-css'
import { useAuth } from '../../hooks/auth.hook'
import { AuthContext } from '../../context/AuthContext';



const App = ({ productLoaded, productItems, categoryItems, categoryLoaded }) => {

	const { token, login, logOut, userId } = useAuth()
	const isAuthenticated = !!token
	const router = UseRoutes(isAuthenticated)

	return (
		<>
			<AuthContext.Provider value={{ token, login, logOut, userId, isAuthenticated }}>
				<Switch>
					<>
						<AppHeader />
						<div className='Wrapper'>
							{router}
						</div>
					</>
				</Switch>
			</AuthContext.Provider>
		</>
	)
}
const mapStateToProps = (state) => {
	return {
		productItems: state.productList,
		categoryItems: state.categoryList
	}
}
const mapDispatchToProps = {
	productLoaded,
	categoryLoaded
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
