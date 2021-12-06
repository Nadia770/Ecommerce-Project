import React from "react";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import classes from "./CartItems.module.css";
// import { FaTrashAlt } from "react-icons/fa";

function CartItems(props) {
  const totalPrice = (
    Math.round(props.price * props.count * 100) / 100
  ).toFixed(2);
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
      <td>£{props.price}</td>
      <td>£{totalPrice}</td>
      <td>
        <Button
          onClick={() => {
            props.DeleteFromCart(props.id);
          }}
          variant="danger"
        >
          Remove
        </Button>
      </td>
    </tr>
  );
}
export default CartItems;
