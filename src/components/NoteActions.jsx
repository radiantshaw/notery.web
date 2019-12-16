import React from 'react';
import {
  Row,
  Button
} from 'react-bootstrap';

export default function NoteActions({ permission }) {
  return (
    permission !== "reading" ? (
      <Row className="ml-4 mt-3 mr-4">
        <Button className="mr-auto">Update</Button>
        {permission !== "contributing" ? (
          <Button className="ml-auto" variant="danger">Delete</Button>
        ) : null}
      </Row>
    ) : null
  );
}