import React from 'react';
import { useHistory } from 'react-router';
import {
  Jumbotron,
  ButtonGroup,
  Button
} from 'react-bootstrap';

export default function Home() {
  const { push } = useHistory();

  function goToLogin() {
    push('/login');
  }

  function goToRegister() {
    push('/register');
  }
  
  return (
    <Jumbotron className="mt-5">
      <h1>Notery</h1>
      <ButtonGroup>
        <Button
          variant="dark"
          onClick={goToLogin}
        >
          Login
        </Button>
        <Button
          variant="light"
          onClick={goToRegister}
        >
          Register
        </Button>
      </ButtonGroup>
    </Jumbotron>
  );
}