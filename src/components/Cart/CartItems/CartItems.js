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
          <Button>+</Button>{" "}
          <span className={classes.quantity}>{props.quantity}</span>{" "}
          <Button>-</Button>
        </div>
      </td>
      <td>{props.price}</td>
      <td>{props.totalPrice}</td>
    </tr>
  );
}
export default CartItems;
