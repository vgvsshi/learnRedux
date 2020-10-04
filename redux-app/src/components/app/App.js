import React from 'react';
import AppHeader from '../appHeader';
import { MainPage, CartPage } from '../pages';
import ProductPage from '../productdPage';
import './app.scss';
import {
	Switch,
	Route,
} from "react-router-dom";

function App() {
	return (
		<>
			<AppHeader />
			<Switch>
				<div className='Wrapper'>
					<Route path="/:id" render={({ match }) => {
						const { id } = match.params;
						return (<ProductPage productId={id} />)
					}} />
					<Route exact path="/" component={MainPage} />
					<Route exact path="/cart" component={CartPage} />
				</div>
			</Switch>
		</>
	);
}

export default App;
