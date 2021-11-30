import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import classes from "./ProductCard.module.css";
import Image from "react-bootstrap/Image";

function ProductCard(props) {
  return (
    <div>
      <Card border="dark" style={{ width: "18rem" }} className={classes.card}>
        {/* <Card.Img className={classes.cardImage} variant="top" src={props.img} /> */}
        <Image
          src={props.img}
          style={{ maxHeight: "22rem", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title>{props.name}s</Card.Title>
          <Card.Subtitle>{props.price}</Card.Subtitle>
          <Card.Text>{props.description}</Card.Text>
          <Button variant="secondary">Add to Cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductCard;
