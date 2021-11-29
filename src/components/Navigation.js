import React from 'react'
import { Navbar, NavDropdown, Nav, Container, Form, FormControl, Button } from "react-bootstrap";

export default function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">Ecommerce Project</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav>
        <Nav.Link className="justify-content-end" href="#home">Cart</Nav.Link>
        <Nav.Link className="justify-content-end" href="#link">Login</Nav.Link>
      </Navbar.Collapse>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Container>
  </Navbar>
  )
}
