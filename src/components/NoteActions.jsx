import React from 'react';
import {
  Row,
  Button
} from 'react-bootstrap';

export default function NoteActions({ permission, onUpdateClick, onDeleteClick }) {
  return (
    permission !== "reading" ? (
      <Row className="ml-4 mt-3 mr-4">
        <Button
          className="mr-auto"
          onClick={onUpdateClick}
        >
          Update
        </Button>
        {permission !== "contributing" ? (
          <Button
            className="ml-auto"
            variant="danger"
            onClick={onDeleteClick}
          >
            Delete
          </Button>
        ) : null}
      </Row>
    ) : null
  );
}