import React, { Component } from "react";
import { Navbar } from 'react-bootstrap';

import NotesContainer from "./NotesContainer";
import Logout from './Logout';
import Loader from './Loader';
import { api } from '../utils';

export default class NotesPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      notes: []
    };
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