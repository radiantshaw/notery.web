import React from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom';

import isLoggedIn from '../utils/isLoggedIn';

export default function ProtectedRoute(props) {
  return (
    <Route {...props}>
      {isLoggedIn() ? props.children : (
        <Redirect to="/login" />
      )}
    </Route>
  );
}