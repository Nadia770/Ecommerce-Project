import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";

export default function Navigation(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Ecommerce Project</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className={classes.link}>
              Home
            </Link>
          </Nav>
          <Nav.Link className="justify-content-end">
            <Link to="/cart" className={classes.link}>
              <FaShoppingCart />
              <span className={classes.navText}>Cart</span>
            </Link>
          </Nav.Link>
          <Nav.Link
            className="justify-content-end"
            onClick={props.handleShowLogin}
            className={classes.link}
          >
            <FaUser />
            <span className={classes.navText}>Login</span>
          </Nav.Link>
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
  );
}
