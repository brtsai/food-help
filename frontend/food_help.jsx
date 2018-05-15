import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store.js';

import { geocodeLocation } from './actions/business_actions';

document.addEventListener('DOMContentLoaded', () => {

  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = { session: window.currentUser, entities: { users: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  
  window.store = store;
  window.geocodeLocation = geocodeLocation;
  
  ReactDOM.render(<Root store={store}/>, root);
});
