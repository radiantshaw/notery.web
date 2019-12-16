import React, { Component } from "react";
import { Navbar } from 'react-bootstrap';

import NotesContainer from "./NotesContainer";
import Logout from './Logout';
import Loader from './Loader';
import CreateNoteModal from './CreateNoteModal';
import { api } from '../utils';

export default class NotesPage extends Component {
  constructor(props) {
    super(props);

    this.handleNoteCreation = this.handleNoteCreation.bind(this);

    this.state = {
      isLoading: false,
      notes: []
    };
  }

  handleNoteCreation(data) {
    this.setState({
      isLoading: true
    });

    api('POST', '/notes', data).then(data => {
      this.setState({
        isLoading: false,
        notes: [...this.state.notes, data]
      });
    });
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    });
    
    api('GET', '/notes').then(data => {
      this.setState({
        isLoading: false,
        notes: data
      })
    });
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
            <CreateNoteModal onCreate={this.handleNoteCreation} />
            <Logout />
          </Navbar.Collapse>
        </Navbar>
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <NotesContainer notes={this.state.notes} />
        )}
      </React.Fragment>
    );
  }
};