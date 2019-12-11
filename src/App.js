import React from 'react';
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import {
  LoginPage,
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
            <LoginPage />
          </LimitedRoute>
          <LimitedRoute path="/register">
            <RegisterForm />
          </LimitedRoute>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
