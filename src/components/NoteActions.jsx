import React from 'react';
import {
  Row,
  Button
} from 'react-bootstrap';

export default function NoteActions({ type }) {
  return (
    type !== "reading" ? (
      <Row className="ml-4 mt-3 mr-4">
        <Button className="mr-auto">Update</Button>
        {type !== "contributing" ? (
          <Button className="ml-auto" variant="danger">Delete</Button>
        ) : null}
      </Row>
    ) : null
  );
}