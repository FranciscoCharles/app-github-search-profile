import React from 'react';
import {
	BrowserRouter as BRouter,
	Switch,
	Route
} from 'react-router-dom';

import Home from './pages/home';
import Repositores from './pages/repositores';

export default function Routes() {
	return (
		<BRouter>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/repositores" component={Repositores} />
			</Switch>
		</BRouter>
	);
}