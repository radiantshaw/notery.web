import React, { useState } from 'react';
import {
  Nav,
  Button,
  Modal,
  Form
} from 'react-bootstrap';
import { useTextInputBinding } from '../hooks';

export default function CreateNoteModal({ onCreate }) {
  const [show, setShow] = useState(false);
  const [content, bindContent] = useTextInputBinding();
  
  function showModal() {
    setShow(true);
  }

  function resetShow() {
    setShow(false);
  }

  function handleCreateClick() {
    onCreate({
      "note": {
        "content": content
      }
    });

    resetShow();
  }
  
  return (
    <Nav className="ml-auto">
      <Button variant="light" onClick={showModal}>Create new</Button>
      <Modal show={show} onHide={resetShow}>
        <Modal.Header closeButton>
          <Modal.Title>Create new note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            as="textarea"
            rows="5"
            onChange={bindContent}
            value={content}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleCreateClick}>Create</Button>
        </Modal.Footer>
      </Modal>
    </Nav>
  );
}