import 'babel-polyfill';
import 'react-toolbox/lib/commons.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, Route, browserHistory } from 'react-router';

import configureStore from './configureStore';

import App from './app/App.js';


import { logPageView } from './helpers/analytics';

const loading = document.querySelector('#loading');
loading.parentNode.removeChild(loading);



const store = configureStore(browserHistory);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
	<Provider store={store} >

			<Router
				history={history}
				onUpdate={logPageView}
				>
				<Route path="/" component={App} />

			</Router>
	
	</Provider>

	, document.getElementById('app'));
