import React from "react";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import classes from "./CartItems.module.css";

function CartItems(props) {
  return (
    <tr>
      <td>
        <Image
          src={props.image}
          style={{ maxHeight: "15rem", objectFit: "cover" }}
        ></Image>
        <span>{props.name}</span>
      </td>
      <td>
        <div>
          <Button
            onClick={() => {
              props.incrementProduct(props.id);
            }}
          >
            +
          </Button>{" "}
          <span className={classes.quantity}>{props.count}</span>{" "}
          <Button
            onClick={() => {
              props.decrementProduct(props.id);
            }}
          >
            -
          </Button>
        </div>
      </td>
      <td>{props.price}</td>
      <td>{props.price * props.count}</td>
      <Button  onClick={() => {
              props.DeleteFromCart(props.id);
            }} variant="danger">Remove</Button>
    </tr>
  );
}
export default CartItems;
