import React from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom';

import isLoggedIn from '../utils/isLoggedIn';

export default function LimitedRoute(props) {
  return (
    <Route {...props}>
      {isLoggedIn() ? (
        <Redirect to="/" />
      ) : props.children}
    </Route>
  );
}