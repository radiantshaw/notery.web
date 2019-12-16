import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

export default function NoteThumb(props) {
  return (
    <Link to={`/notes/${props.id}`}>
      <Card>
        <Card.Body>
          {props.children}
        </Card.Body>
      </Card>
    </Link>
  );
}