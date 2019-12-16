import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { api } from "../utils";
import { NoteContainer } from '../components';

class NotePage extends Component {
  constructor(props) {
    super(props);

    this.handleShare = this.handleShare.bind(this);

    this.state = {
      note: {}
    };
  }

  handleShare(data) {
    const { match: { params } } = this.props;
    
    api('POST', '/shares', {
      ...data,
      "id": params.noteID
    }).then(data => {
      const type = data["type"]
      
      this.setState(prevState => ({
        note: {
          ...prevState.note,
          [type]: [...this.state.note[type], {
            id: data["id"],
            email: data["email"]
          }]
        }
      }));
    });
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    
    api('GET', '/notes/' + params.noteID).then(data => {
      this.setState({
        note: data["note"]
      });
    });
  }

  render() {
    return (
      <NoteContainer
        permission={this.state.note["permission"]}
        contributors={this.state.note["contributing"]}
        readers={this.state.note["reading"]}
        onShare={this.handleShare}
      />
    );
  }
}

export default withRouter(NotePage);