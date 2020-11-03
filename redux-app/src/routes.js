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
				<Route exact path="/cart">{isAuthenticated ? <CartPage /> : <Redirect to='/auth' />}</Route >
				<Route exact path="/product/:id">{isAuthenticated ? <ProductPage /> : <Redirect to='/' />}</Route >
				<Route exact path="/">{isAuthenticated ? <MainPage /> : <Redirect to='/' />}</Route>
				<Route exact path="/addprod">{isAuthenticated ? <AddPage /> : <Redirect to='/' />}</Route >
			</>
		)
		:
		(
			<>
				<Route exact path="/auth">{isAuthenticated ? <Redirect to='/auth' /> : <AuthPage />}</Route>
			</>
		)
}

export default UseRoutes;