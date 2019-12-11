import React from 'react';
import {
  Button,
  Nav
} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

function Logout(props) {
  function handleClick(event) {
    event.preventDefault();

    cookies.remove('token');
    props.history.push('/');
  }
  
  return (
    <Nav className="ml-auto">
      <Button variant="dark" onClick={handleClick}>Log out</Button>
    </Nav>
  );
}

export default withRouter(Logout);