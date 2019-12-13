import React, { useState } from 'react';
import {
  Nav,
  Button,
  Modal,
  Form
} from 'react-bootstrap';

export default function CreateNoteModal(props) {
  const [show, setShow] = useState(false);
  
  function showModal() {
    setShow(true);
  }

  function resetShow() {
    setShow(false);
  }
  
  return (
    <Nav className="ml-auto">
      <Button variant="light" onClick={showModal}>Create new</Button>
      <Modal show={show} onHide={resetShow}>
        <Modal.Header closeButton>
          <Modal.Title>Create new note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control as="textarea" rows="5"></Form.Control>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success">Create</Button>
        </Modal.Footer>
      </Modal>
    </Nav>
  );
}