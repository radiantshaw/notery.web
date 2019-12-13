import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { api } from "../utils";
import { NoteContainer } from '../components';

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
      <NoteContainer
        type={this.state.note["type"]}
        contributors={this.state.note["contributors"]}
        readers={this.state.note["readers"]}
      />
    );
  }
}

export default withRouter(NotePage);