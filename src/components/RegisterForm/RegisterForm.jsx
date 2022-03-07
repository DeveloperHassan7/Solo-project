import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Container, Button, Row, Col } from "react-bootstrap"

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [full_name, setfull_name] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
      },
    });
  }; // end registerUser

  return (
    <Container className="contact-container" fluid>
      <Form className="formPanel" onSubmit={registerUser} >
        <h2>Register User</h2>
        {errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {errors.registrationMessage}
          </h3>
        )}
        <Form.Group >
          <Form.Label>Username</Form.Label>
          <Form.Control type="text"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <>
            <Form.Label htmlFor="inputPassword5">Password</Form.Label>
            <Form.Control
              type="password"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
              value={password}
              required
              onChange={(event) => setPassword(event.target.value)}
            />
            <Form.Text id="passwordHelpBlock" muted>
              Your password must be 8-20 characters long
            </Form.Text>
          </>
        </Form.Group>

        <input className="btn" type="submit" name="submit" value="Register" />

      </Form>
    </Container>
  );
}

export default RegisterForm;
