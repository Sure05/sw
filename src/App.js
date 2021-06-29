import React, {Fragment} from "react";
import {
	Switch,
	Route, useLocation, Link
} from "react-router-dom";
import Home from "./App/Pages/Home";
import {Menu} from "semantic-ui-react";
import Films from "./App/Pages/Films";

const routes = [
	{
		path: '/',
		exact: true,
		component: () => <Home />,
		name: 'Home'
	},
	{
		path: '/films',
		component: () => <Films />,
		name: 'Films'
	},
]

function App() {
	const location = useLocation();
	return (
		<Fragment>
			<Menu>
				{routes.map((route, index) => (
					<Menu.Item
						key={index}
						name={route.name.toLowerCase()}
						active={location.pathname === route.path}
					>
						<Link to={route.path}>
							{route.name}
						</Link>
					</Menu.Item>
				))}
			</Menu>
			<Switch>
				{routes.map((route, index) => (
					<Route
						key={index}
						path={route.path}
						exact={route.exact}
						component={route.component}
					/>
				))}
			</Switch>
		</Fragment>
	);
}

export default App;
