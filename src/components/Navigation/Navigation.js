import React from "react";
import { Navbar, Nav, Container, Form, FormControl } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";

export default function Navigation(props) {
  const getSearchTerm = (event) => {
    props.searchHandler(event.target.value);
  };

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
          <Link
            to="/cart"
            className="justify-content-end"
            onClick={() => props.fetchCartProducts(1)}
          >
            <span className={classes.link}>
              <FaShoppingCart />
              <span className={classes.navText}>Cart</span>
            </span>
          </Link>
          <Nav.Link
            to="/login"
            className="justify-content-end"
            onClick={props.handleShowLogin}
          >
            <span className={classes.link}>
              <FaUser />
              <span className={classes.navText}>Login</span>
            </span>
          </Nav.Link>
        </Navbar.Collapse>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            value={props.searchTerm}
            onChange={getSearchTerm}
          />
        </Form>
      </Container>
    </Navbar>
  );
}
