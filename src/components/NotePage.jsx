import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
  Row,
  Col,
  Form,
  ListGroup
} from 'react-bootstrap';

import { api } from "../utils";
import {
  NoteActions,
  NoteShareActions
} from '../components';

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
    const { contributors, readers } = this.state.note;
    
    return (
      <React.Fragment>
        <NoteActions type={this.state.note["type"]} />
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
        <NoteShareActions type={this.state.note["type"]} />
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
      </React.Fragment>
    );
  }
}

export default withRouter(NotePage);