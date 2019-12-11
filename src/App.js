import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import {
  LoginForm,
  RegisterForm
} from './components';

function App() {
  return (
    <Container fluid>
      <Router>
        <Switch>
          <Route path="/login">
            <LoginForm />
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
