import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { MainPage, CartPage } from './components/pages';
import ProductPage from './components/productdPage';
import AuthPage from './components/auth/authpage'
import AddPage from './components/addProduct/add'


const UseRoutes = isAuthenticated => {
	return isAuthenticated ?
		(
			<>

				<Route exact path="/cart" component={CartPage} />
				<Route path="/product/:id" component={ProductPage} />
				<Route exact path="/" component={MainPage} />
				<Route exact path="/addprod" component={AddPage} />
			</>
		)
		:
		(
			<>
				<Route exact path="/auth" component={AuthPage} />
			</>
		)
}

export default UseRoutes;