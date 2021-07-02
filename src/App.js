import React, {Fragment} from "react";
import {
	Switch,
	Route, useLocation, Link, useHistory, useParams
} from "react-router-dom";
import Home from "./App/Pages/Home";
import {Menu} from "semantic-ui-react";
import Films from "./App/Pages/Films";
import People from "./App/Pages/People";
import SinglePeople from "./App/Pages/SinglePeople";

const routes = [
	{
		path: '/',
		exact: true,
		component: () => <Home />,
		name: 'Home',
		hasLink: true
	},
	{
		path: '/films',
		component: () => <Films />,
		name: 'Films',
		hasLink: true
	},
	{
		path: '/people/:id',
		component: () => <SinglePeople />,
	},
	{
		path: '/peoples',
		component: () => <People />,
		name: 'People',
		exact: true,
		hasLink: true
	},
]

function App() {
	const location = useLocation();
	let history = useHistory();
	let back = e => {
		e.stopPropagation();
		history.goBack();
	};
	return (
		<Fragment>
			<Menu>
				{routes.map((route, index) => (
					<Fragment>
					{route.hasLink ?
						<Menu.Item
							key={index}
							name={route.name.toLowerCase()}
							active={location.pathname === route.path}
						>
							 <Link to={route.path}>
								{route.name}
							</Link>
						</Menu.Item>
					: ''}
					</Fragment>
				))}
			</Menu>
			<Switch>
				{routes.map((route, index) => (
					<Route
						key={index}
						path={`${route.path}`}
						exact={route.exact}
						component={route.component}
					/>
				))}
				
			</Switch>
		</Fragment>
	);
}

export default App;
