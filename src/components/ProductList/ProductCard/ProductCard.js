import React from "react";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
import classes from "./ProductCard.module.css";

function ProductCard() {
  return (
    <div>
      <div>
        <div>
          <img
            className={classes.cardImage}
            src="https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJ1aXR8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60"
          ></img>
        </div>
        <div>
          <p>Name</p>
          <p>Price</p>
          <p>Description</p>
          <button>Add to Cart</button>
        </div>
      </div>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductCard;
