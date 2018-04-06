import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store.js';
import * as BusinessAPIUtil from './util/business_api_util';
import * as BusinessActions from './actions/business_actions';

document.addEventListener('DOMContentLoaded', () => {

  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = { session: window.currentUser };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  
  window.BusinessAPIUtil = BusinessAPIUtil;
  window.BusinessActions = BusinessActions;
  window.store = store;
  window.dispatch = store.dispatch;

  ReactDOM.render(<Root store={store}/>, root);
});
