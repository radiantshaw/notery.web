import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
  Row,
  Col,
  Button,
  Form,
  ListGroup
} from 'react-bootstrap';

class NotePage extends Component {
  render() {
    return (
      <React.Fragment>
        <Row className="ml-4 mt-3 mr-4">
          <Button className="mr-auto">Update</Button>
          <Button className="ml-auto" variant="danger">Delete</Button>
        </Row>
        <Row className="ml-1 mt-2 mr-1">
          <Col sm="12" md="12" lg="12">
            <Form.Control as="textarea" rows="10">
              Some text
            </Form.Control>
          </Col>
        </Row>
        <Row className="ml-4 mt-3 mr-4">
          <Button className="mr-auto" variant="dark">Add contributors</Button>
          <Button className="ml-auto" variant="light">Add readers</Button>
        </Row>
        <Row className="ml-1 mt-2 mr-1">
          <Col sm="12" md="6" lg="6">
            <ListGroup>
              <ListGroup.Item variant="dark">Contributors</ListGroup.Item>
              <ListGroup.Item>natasha.romanoff@avengers.com</ListGroup.Item>
              <ListGroup.Item>peter.parker@avengers.com</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm="12" md="6" lg="6">
            <ListGroup>
              <ListGroup.Item variant="dark">Readers</ListGroup.Item>
              <ListGroup.Item>obi.wan.kenobi@jedi.org</ListGroup.Item>
              <ListGroup.Item>boba.fett@mandalorian.org</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default withRouter(NotePage);