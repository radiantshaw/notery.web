import React, { Component } from "react";
import {
  Navbar
} from 'react-bootstrap';

import NotesContainer from "./NotesContainer";
import Logout from './Logout';

export default class NotesPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [
        {
          id: 1,
          content: 'Note 1',
          type: 'mine'
        },
        {
          id: 2,
          content: 'Note 2',
          type: 'contributing'
        },
        {
          id: 3,
          content: 'Note 3',
          type: 'reading'
        }
      ]
    };
  }
  
  render() {
    return (
      <React.Fragment>
        <Navbar>
          <Navbar.Brand>
            <h1>
              Notery
            </h1>
          </Navbar.Brand>
          <Navbar.Collapse>
            <Logout />
          </Navbar.Collapse>
        </Navbar>
        <NotesContainer notes={this.state.notes} />
      </React.Fragment>
    );
  }
};