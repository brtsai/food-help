import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';

const App = () => (
  <div>
    <Link to='/'>
      <h1>Welcome to Food Help</h1>
    </Link>
    <GreetingContainer />
  </div>
);

export default App;
