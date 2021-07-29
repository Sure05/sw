import React, {Fragment} from "react";
import {
    Switch,
    Route, useLocation, Link,
} from "react-router-dom";
import Home from "./App/Pages/Home";
import {Menu} from "semantic-ui-react";
import Films from "./App/Pages/Films";
import People from "./App/Pages/People";
import SinglePeople from "./App/Pages/SinglePeople";
import SingleFilm from "./App/Pages/SingleFilm";

const routes = [

    {
        path: '/films',
        component: () => <Films/>,
        name: 'Films',
        hasLink: true
    },
    /*{
        path: '/people/:id',
        component: () => <SinglePeople />,
    },*/
    {
        path: '/peoples',
        component: () => <People/>,
        name: 'People',
        exact: true,
        hasLink: true
    },
    {
        path: '/',
        exact: true,
        component: () => <Home/>,
        name: 'Home',
        hasLink: true
    },
]

function App() {
    const location = useLocation();
    return (
        <Fragment>
            <Menu>
                <Menu.Item
                    name={'Home'}
                    active={location.pathname === '/'}
                >
                    <Link to='/'>
                        Home
                    </Link>
                </Menu.Item>
                <Menu.Item
                    name={'Films'}
                    active={location.pathname === '/films'}
                >
                    <Link to='/films'>
                        Films
                    </Link>
                </Menu.Item>
            </Menu>
            <Switch>
                <Route exact path='/'>
                    <Home/>
                </Route>
                <Route exact path="/films">
                    <Films/>
                </Route>
                <Route path="/films/:id">
                    <SingleFilm/>
                </Route>
                <Route exact path='/people'>
                    <People/>
                </Route>
                <Route path='/people/:id'>
                    <SinglePeople/>
                </Route>
            </Switch>
        </Fragment>
    );
}

export default App;
