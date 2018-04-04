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
import SessionPageContainer from './session/session_page_container';
import HomePage from './homepage/homepage_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <Link to='/'>
      <h1>Welcome to Food Help</h1>
    </Link>
    <Switch>
      <Route exact path="/" component= {GreetingContainer} />
      <Route path="/biz" component= {GreetingContainer} />
    </Switch>

    <Switch>
      <Route exact path="/" component= {HomePage} />
      <AuthRoute exact path="/login" component= { SessionPageContainer } />
      <AuthRoute exact path="/signup" component= { SessionPageContainer } />
    </Switch>
  </div>
);

export default App;
