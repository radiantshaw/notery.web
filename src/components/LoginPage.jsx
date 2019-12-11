import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Cookies from 'universal-cookie';

import LoginForm from './LoginForm';
import { api } from '../utils';

const cookies = new Cookies();

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      isLoading: false,
      isError: false
    };
  }

  handleSubmit(email, password) {
    this.setState({
      isLoading: true,
      isError: false
    });
    
    api('POST', '/login', {
      email: email,
      password: password
    }).then(data => {
      this.setState({
        isLoading: false
      });
      
      if (data["error"] !== undefined) {
        this.setState({
          isError: data["error"]
        });
      }

      cookies.set('token', data["token"])
      this.props.history.push('/');
    });
  }
  
  render() {
    return (
      <LoginForm
        isLoading={this.state.isLoading}
        isError={this.state.isError}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

export default withRouter(LoginPage);