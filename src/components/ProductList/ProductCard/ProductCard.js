import React, {useState} from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import classes from "./ProductCard.module.css";
import Image from "react-bootstrap/Image";

function ProductCard(props) {
  const [disabled, setDisabled] = useState(false);
  return (
    <div>
      <Card border="dark" style={{ width: "18rem" }} className={classes.card}>
        <Image
          src={props.image}
          style={{ width: "100%", height: "25vw", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Subtitle>£{props.price}</Card.Subtitle>
          <Card.Text>{props.description}</Card.Text>
          <Button
            disabled={disabled}
            variant="secondary"
            onClick={() => {
              props.addToCart(props.id)
              setDisabled(true);
            }}
          >
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductCard;
