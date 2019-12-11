import React from 'react';
import {
  Row,
  Col,
  Button,
  Form
} from 'react-bootstrap';

import '../css/LoginForm.css';
import { useTextInputBinding } from '../hooks';

export default function LoginForm({ isLoading, onSubmit }) {
  let [email, bindEmail] = useTextInputBinding();
  let [password, bindPassword] = useTextInputBinding();

  function handleSubmit(event) {
    event.preventDefault();

    onSubmit(email, password);
  }
  
  return (
    <Row>
      <Col
        sm={{ span: 8, offset: 2 }}
        md={{ span: 8, offset: 2 }}
        lg={{ span: 6, offset: 3 }}
      >
        <Form className="login-form" onSubmit={handleSubmit}>
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              disabled={isLoading}
              onChange={bindEmail}
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              disabled={isLoading}
              onChange={bindPassword}
            />
          </Form.Group>

          <Button variant="primary" type="submit" onSubmit={onSubmit}>
            {isLoading ? 'Signing in...' : 'Sign in'}
          </Button>
        </Form>
      </Col>
    </Row>
  );
}