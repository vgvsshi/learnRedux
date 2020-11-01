import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { MainPage, CartPage } from './components/pages';
import ProductPage from './components/productdPage';
import AuthPage from './components/auth/authpage'


const UseRoutes = isAuthenticated => {
	return isAuthenticated ?
		(
			<>

				<Route exact path="/cart" component={CartPage} />
				<Route path="/product/:id" component={ProductPage} />
				<Route exact path="/" component={MainPage} />
				<Redirect to="/" />
			</>
		)
		:
		(
			<>
				<Route exact path="/auth" component={AuthPage} />
				<Redirect to="/auth" />
			</>
		)
}

export default UseRoutes;