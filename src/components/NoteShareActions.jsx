import React, { useState } from 'react';
import {
  Modal,
  Form,
  Row,
  Button
} from 'react-bootstrap';

export default function NoteShareAction({ permission, onShare }) {
  const [isContributorModalShown, setContributorModalShown] = useState(false);
  const [isReaderModalShown, setReaderModalShown] = useState(false);
  const [email, setEmail] = useState('');

  function handleEmailChange(event) {
    setEmail(event.target.value)
  }

  function showContributorModal() {
    setContributorModalShown(true);
  }

  function resetContributorModalShown() {
    setEmail('');
    setContributorModalShown(false);
  }

  function showReaderModal() {
    setReaderModalShown(true);
  }

  function resetReaderModalShown() {
    setEmail('');
    setReaderModalShown(false);
  }

  function handleContributorAddClick() {
    onShare({
      "user": {
        "email": email,
        "permission": "contributing"
      }
    });

    resetContributorModalShown();
  }

  function handleReaderAddClick() {
    onShare({
      "user": {
        "email": email,
        "permission": "reading"
      }
    });

    resetReaderModalShown();
  }
  
  return (
    permission === "mine" ? (
      <Row className="ml-4 mt-3 mr-4">
        <Button
          className="mr-auto"
          variant="dark"
          onClick={showContributorModal}
        >
          Add contributors
        </Button>
        <Modal show={isContributorModalShown} onHide={resetContributorModalShown}>
          <Modal.Header closeButton>
            <Modal.Title>Add contributors</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Control
              onChange={handleEmailChange}
              value={email}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={handleContributorAddClick}>Add</Button>
          </Modal.Footer>
        </Modal>
        <Button
          className="ml-auto"
          variant="light"
          onClick={showReaderModal}
        >
          Add readers
        </Button>
        <Modal show={isReaderModalShown} onHide={resetReaderModalShown}>
          <Modal.Header closeButton>
            <Modal.Title>Share</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Control
              onChange={handleEmailChange}
              value={email}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={handleReaderAddClick}>Create</Button>
          </Modal.Footer>
        </Modal>
      </Row>
    ) : null
  );
}