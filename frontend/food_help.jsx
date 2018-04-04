import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store.js';
import { signup, login, logout } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  
  
  window.store = store;
  window.dispatch = store.dispatch;
  window.login = login;
  window.signup = signup;
  window.logout = logout;

  ReactDOM.render(<Root store={store}/>, root);
});
