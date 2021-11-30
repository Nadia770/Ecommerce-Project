import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Login(props) {
  return (
    <div>
      <Modal show={props.showLogin} onHide={props.handleCloseLogin}>
        <Form onSubmit={props.handleSubmitLogin}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={props.handleChangeEmail}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={props.handleChangePassword}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.handleCloseLogin}>
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={props.handleCloseLogin}
              type="submit"
            >
              Login
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}

export default Login;
