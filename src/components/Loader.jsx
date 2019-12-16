import React from 'react';
import {
  Container,
  Spinner
} from 'react-bootstrap';

export default function Loader() {
  return (
    <Container className="d-flex justify-content-center">
      <Spinner animation="border" className="mb-auto" />
    </Container>
  );
}