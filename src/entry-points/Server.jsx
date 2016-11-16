import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Router, hashHistory } from 'react-router'
import routes from '../Routes.jsx'
import GuestStore from '../stores/GuestStore'

const initialState = window.initialState || {
  guests:[]
}
var store = GuestStore.fromJS(initialState.guests)

// Disable 'no-undef' rule for this export because it's required from server, which uses nodeJs
// eslint-disable-next-line no-undef
module.exports = ReactDOMServer.renderToString(
  <Router history={hashHistory} routes={routes(store)}>
  </Router>
);
