import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { api } from "../utils";
import {
  NoteActions,
  NoteShareActions,
  NoteArea,
  NoteShareList
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
    const { type, contributors, readers } = this.state.note;
    
    return (
      <React.Fragment>
        <NoteActions type={type} />
        <NoteArea type={type} />
        <NoteShareActions type={type} />
        <NoteShareList
          contributors={contributors}
          readers={readers}
        />
      </React.Fragment>
    );
  }
}

export default withRouter(NotePage);