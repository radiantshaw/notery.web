import React from 'react';
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import {
  AuthPage,
  LoginForm,
  RegisterForm,
  ProtectedRoute,
  LimitedRoute
} from './components';

function App() {
  return (
    <Container fluid>
      <Router>
        <Switch>
          <ProtectedRoute path="/" exact>
            <div>Logged in!</div>
          </ProtectedRoute>
          <LimitedRoute path="/login">
            <AuthPage path="/login">
              {(props) => (
                <LoginForm {...props} />
              )}
            </AuthPage>
          </LimitedRoute>
          <LimitedRoute path="/register">
            <AuthPage path="/register">
              {(props) => (
                <RegisterForm {...props} />
              )}
            </AuthPage>
          </LimitedRoute>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
