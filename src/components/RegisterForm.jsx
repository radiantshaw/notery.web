import React, { useState } from 'react';
import {
  Row,
  Col,
  Button,
  Form,
  Alert
} from 'react-bootstrap';

import '../css/RegisterForm.css';
import { useTextInputBinding } from '../hooks';

export default function RegisterForm({ isLoading, isError, onSubmit }) {
  let [email, bindEmail] = useTextInputBinding();
  let [password, bindPassword] = useTextInputBinding();
  let [passwordConfirmation, bindPasswordConfirmation] = useTextInputBinding();
  let [isPasswordMismatch, setPasswordMismatch] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (password !== passwordConfirmation) {
      setPasswordMismatch(true);
      return;
    }

    onSubmit({
      "user": {
        "email": email,
        "password": password,
        "password_confirmation": passwordConfirmation
      }
    });
  }
  
  return (
    <Row>
      <Col
        sm={{ span: 8, offset: 2 }}
        md={{ span: 8, offset: 2 }}
        lg={{ span: 6, offset: 3 }}
      >
        <Form className="register-form" onSubmit={handleSubmit}>
          {isError ? (
            <Alert variant="danger">
              {isError}
            </Alert>
          ) : null}
          
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              disabled={isLoading}
              onChange={bindEmail}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
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

          <Form.Group controlId="password-confirmation">
            <Form.Label>Confirm password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              disabled={isLoading}
              onChange={bindPasswordConfirmation}
            />
            {isPasswordMismatch ? (
              <Form.Text className="text-danger">
                Password mismatch!
              </Form.Text>
            ) : null}
          </Form.Group>

          <Button variant="primary" type="submit">
            {isLoading ? 'Signing up...' : 'Sign up'}
          </Button>
        </Form>
      </Col>
    </Row>
  );
}
