import React from 'react';
import {
  Row,
  Col,
  Form
} from 'react-bootstrap';

export default function NoteArea({ type }) {
  return (
    <Row className="ml-1 mt-2 mr-1">
      <Col sm="12" md="12" lg="12">
        <Form.Control
          as="textarea"
          rows="10"
          defaultValue="Sometext"
          readOnly={type === "reading"}
        />
      </Col>
    </Row>
  );
}