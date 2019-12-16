import React from 'react';
import {
  Row,
  Col,
  ListGroup,
  Button
} from 'react-bootstrap';

export default function NoteShareList({ contributors, readers, isOwner }) {
  return (
    <Row className="ml-1 mt-2 mr-1">
      <Col sm="12" md="6" lg="6">
        <ListGroup>
          <ListGroup.Item variant="dark">Contributors</ListGroup.Item>
          {contributors && contributors.length > 0 ? (
            contributors.map(contributor => (
              <ListGroup.Item key={contributor["id"]}>
                <span>{contributor["email"]}</span>
                {isOwner ? (
                  <Button
                    className="float-right"
                    size="sm"
                    variant="danger"
                  >
                    Remove
                  </Button>
                ) : null}
              </ListGroup.Item>
            ))
          ) : (
            <ListGroup.Item disabled>No contributors...</ListGroup.Item>
          )}
        </ListGroup>
      </Col>
      <Col sm="12" md="6" lg="6">
        <ListGroup>
          <ListGroup.Item variant="dark">Readers</ListGroup.Item>
          {readers && readers.length > 0 ? (
            readers.map(reader => (
              <ListGroup.Item key={reader["id"]}>
                <span>{reader["email"]}</span>
                {isOwner ? (
                  <Button
                    className="float-right"
                    size="sm"
                    variant="danger"
                  >
                    Remove
                  </Button>
                ) : null}
              </ListGroup.Item>
            ))
          ) : (
            <ListGroup.Item disabled>No readers...</ListGroup.Item>
          )}
        </ListGroup>
      </Col>
    </Row>
  );
}