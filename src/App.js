import React, {Fragment} from "react";
import {
	Switch,
	Route, useLocation, Link, useHistory, useParams
} from "react-router-dom";
import Home from "./App/Pages/Home";
import {Menu} from "semantic-ui-react";
import Films from "./App/Pages/Films";
import People from "./App/Pages/People";
import Modal from "./App/Components/Modal";

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
	{
		path: '/peoples',
		component: () => <People />,
		name: 'People'
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
				<Route
					path={`/films/:id`}
					render={() => {
						let params = useParams();
						return (
							<Modal
								onClick={back}
							>
								<div
									style={{
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										height: "100%",
									}}
								>
									Edit Profile Modal!
								</div>
							</Modal>
						);
					}} />
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
