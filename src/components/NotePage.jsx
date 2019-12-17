import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { api } from "../utils";
import { NoteContainer } from '../components';

class NotePage extends Component {
  constructor(props) {
    super(props);

    this.handleShare = this.handleShare.bind(this);
    this.handleUnshare = this.handleUnshare.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    this.state = {
      note: {}
    };
  }

  handleUpdate(data) {
    const { match: { params } } = this.props;
    
    api('PUT', '/notes/' + params.noteID, data).then(data => {
      this.setState({
        note: {
          ...this.state.note,
          "content": data["note"]["content"]
        }
      });
    });
  }

  handleDelete() {
    const { match: { params } } = this.props;
    
    api('DELETE', '/notes/' + params.noteID).then(() => {
      this.props.history.push('/notes');
    });
  }

  handleShare(data) {
    const { match: { params } } = this.props;
    
    api('POST', '/shares', {
      "share": {
        ...data,
        "note": {
          "id": params.noteID
        }
      }
    }).then(data => {
      const permission = data["share"]["permission"]

      this.setState(prevState => ({
        note: {
          ...prevState.note,
          [permission]: [...this.state.note[permission], {
            id: data["share"]["id"],
            email: data["share"]["email"]
          }]
        }
      }));
    });
  }

  handleUnshare(id) {
    api('DELETE', '/shares/' + id).then(data => {
      const permission = data["share"]["permission"];
      const removableID = data["share"]["id"];

      this.setState(prevState => ({
        note: {
          ...prevState.note,
          [permission]: prevState.note[permission].filter(permissible => {
            return permissible["id"] !== removableID;
          })
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
        note={this.state.note}
        onShare={this.handleShare}
        onUnshare={this.handleUnshare}
        onUpdate={this.handleUpdate}
        onDelete={this.handleDelete}
      />
    );
  }
}

export default withRouter(NotePage);