import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
  Row,
  Col,
  Button,
  Form,
  ListGroup
} from 'react-bootstrap';

import { api } from "../utils";

class NotePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      note: {}
    };
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    
    api('GET', '/notes/' + params.noteID).then(data => {
      this.setState({
        note: data
      });
    });
  }
  
  render() {
    return (
      <React.Fragment>
        {this.state.note["type"] !== "reading" ? (
          <Row className="ml-4 mt-3 mr-4">
            <Button className="mr-auto">Update</Button>
            {this.state.note["type"] !== "contributing" ? (
              <Button className="ml-auto" variant="danger">Delete</Button>
            ) : null}
          </Row>
        ) : null}
        <Row className="ml-1 mt-2 mr-1">
          <Col sm="12" md="12" lg="12">
            <Form.Control
              as="textarea"
              rows="10"
              defaultValue="Sometext"
              readOnly={this.state.note["type"] === "reading"}
            />
          </Col>
        </Row>
        {this.state.note["type"] === "mine" ? (
          <Row className="ml-4 mt-3 mr-4">
            <Button className="mr-auto" variant="dark">Add contributors</Button>
            <Button className="ml-auto" variant="light">Add readers</Button>
          </Row>
        ) : null}
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