import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Cookies from 'universal-cookie';

import { api } from '../utils';

const cookies = new Cookies();

class AuthPage extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      isLoading: false,
      isError: false
    };
  }

  handleSubmit(data) {
    this.setState({
      isLoading: true,
      isError: false
    });
    
    api('POST', this.props.path, data).then(data => {
      this.setState({
        isLoading: false
      });
      
      cookies.set('token', data["user"]["token"]);
      this.props.history.push('/');
    }).catch(error => {
      this.setState({
        isLoading: false,
        isError: error.message
      });
    });
  }
  
  render() {
    return this.props.children({
      isLoading: this.state.isLoading,
      isError: this.state.isError,
      onSubmit: this.handleSubmit
    });
  }
}

export default withRouter(AuthPage);