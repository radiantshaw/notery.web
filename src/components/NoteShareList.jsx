import React from 'react';
import {
  Row,
  Col,
  ListGroup
} from 'react-bootstrap';

export default function NoteShareList({ contributors, readers }) {
  return (
    <Row className="ml-1 mt-2 mr-1">
      <Col sm="12" md="6" lg="6">
        <ListGroup>
          <ListGroup.Item variant="dark">Contributors</ListGroup.Item>
          {contributors ? (
            contributors.map(contributor => (
              <ListGroup.Item key={contributor["id"]}>
                {contributor["email"]}
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
          {readers ? (
            readers.map(reader => (
              <ListGroup.Item key={reader["id"]}>
                {reader["email"]}
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