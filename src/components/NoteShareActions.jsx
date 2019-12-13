import React from 'react';
import {
  Row,
  Button
} from 'react-bootstrap';

export default function NoteShareAction({ type }) {
  return (
    type === "mine" ? (
      <Row className="ml-4 mt-3 mr-4">
        <Button className="mr-auto" variant="dark">Add contributors</Button>
        <Button className="ml-auto" variant="light">Add readers</Button>
      </Row>
    ) : null
  );
}