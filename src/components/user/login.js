import React from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { islogged } from "../../actions";

const Login = () => {
  const dispatch = useDispatch();
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email" />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button onClick={() => dispatch(islogged())}>Submit</Button>
    </Form>
  );
};

export default Login;
