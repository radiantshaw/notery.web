import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import {
  LoginPage,
  RegisterForm
} from './components';
import { ProtectedRoute } from './utils';

function App() {
  return (
    <Container fluid>
      <Router>
        <Switch>
          <ProtectedRoute path="/" exact>
            <div>Logged in!</div>
          </ProtectedRoute>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/register">
            <RegisterForm />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
