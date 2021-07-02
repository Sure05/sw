import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import store from "./App/store";
import {Router} from "react-router-dom"

import 'semantic-ui-css/semantic.min.css'
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

ReactDOM.render(
	<Router history={history}>
		<Provider store={store}>
			<App/>
		</Provider>
	</Router>,
document.getElementById('root')
);

// If you want to start measuring performance in your App, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
