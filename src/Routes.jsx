import React from 'react';
import {Route, IndexRoute} from 'react-router'

import App from './components/App.jsx'
import About from './components/About.jsx'
import Guests from './components/Guests.jsx'

export default (store) => {
	return (
		<Route path="/" component={App} guestStore={store}>
			<IndexRoute component={About}/>
			<Route path="guests" component={Guests} guestStore={store}/>
		</Route>
	)
}