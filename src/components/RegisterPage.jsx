import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Cookies from 'universal-cookie';

import RegisterForm from './RegisterForm';
import { api } from '../utils';

const cookies = new Cookies();

class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      isLoading: false,
      isError: false
    };
  }

  handleSubmit(email, password, passwordConfirmation) {
    this.setState({
      isLoading: true,
      isError: false
    });
    
    api('POST', '/register', {
      "email": email,
      "password": password,
      "password_confirmation": passwordConfirmation
    }).then(data => {
      this.setState({
        isLoading: false
      });
      
      if (data["error"] !== undefined) {
        this.setState({
          isError: data["error"]
        });
      } else {
        cookies.set('token', data["token"])
        this.props.history.push('/');
      }
    });
  }
  
  render() {
    return (
      <RegisterForm
        isLoading={this.state.isLoading}
        isError={this.state.isError}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

export default withRouter(RegisterPage);