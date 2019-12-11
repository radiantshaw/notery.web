import React from 'react';
import {
  Row,
  Col,
  Button,
  Form
} from 'react-bootstrap';

import '../css/LoginForm.css';

export default function LoginForm({ isLoading, onSubmit }) {
  return (
    <Row>
      <Col
        sm={{ span: 8, offset: 2 }}
        md={{ span: 8, offset: 2 }}
        lg={{ span: 6, offset: 3 }}
      >
        <Form className="login-form">
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" disabled={isLoading} />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" disabled={isLoading} />
          </Form.Group>

          <Button variant="primary" type="submit" onSubmit={onSubmit}>
            {isLoading ? 'Signing in...' : 'Sign in'}
          </Button>
        </Form>
      </Col>
    </Row>
  );
}