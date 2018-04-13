import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store.js';

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
  
  ReactDOM.render(<Root store={store}/>, root);
});
