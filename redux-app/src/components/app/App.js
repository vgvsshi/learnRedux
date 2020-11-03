import React, { useCallback, useEffect } from 'react';
import AppHeader from '../appHeader';
import { Switch } from "react-router-dom";
import UseRoutes from '../../routes'
import { productLoaded, categoryLoaded } from '../../actions';
import { connect } from 'react-redux';
import './app.scss';
import 'materialize-css'
import { useAuth } from '../../hooks/auth.hook'
import { AuthContext } from '../../context/AuthContext';
import Loader from '../loader'
import { useHttp } from '../../hooks/http.hook'



const App = ({ productLoaded, productItems, categoryItems, categoryLoaded }) => {

	const { request, loading } = useHttp()

	const { token, login, logOut, userId } = useAuth()

	const getAllProd = useCallback(async () => {
		try {
			const prodList = await request('/api/products', 'GET', null)
			await productLoaded(prodList)
			console.log(prodList)
		} catch (e) {
			console.log(e)
		}
	}, [token, request, productLoaded])

	useEffect(() => {
		getAllProd()
	}, [getAllProd])

	const isAuthenticated = !!token
	const router = UseRoutes(isAuthenticated)

	return !loading ? (
		<>
			<AuthContext.Provider value={{ token, login, logOut, userId, isAuthenticated }} >
				<Switch>
					<>
						<AppHeader />
						<div className='container'>
							{router}
						</div>
					</>
				</Switch>
			</AuthContext.Provider>
		</>
	) : <Loader />
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
