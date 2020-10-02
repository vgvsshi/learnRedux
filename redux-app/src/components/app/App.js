import React from 'react';
import AppHeader from '../appHeader';
import { MainPage, CartPage } from '../pages';
import './app.scss';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";

function App() {
	return (
		<>
			<Router>
				<AppHeader />
				<Switch>
					<div className='Wrapper'>
						<Route exact path="/"><MainPage /></Route>
						<Route path="/cart"><CartPage /></Route>
					</div>
				</Switch>
			</Router>
		</>
	);
}

export default App;
