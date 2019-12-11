import React, { Component } from "react";

import NotesContainer from "./NotesContainer";

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
    return <NotesContainer notes={this.state.notes} />;
  }
};