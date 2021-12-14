import React from "react";
import Table from "react-bootstrap/Table";
import classes from "./Cart.module.css";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import CartItems from "./CartItems/CartItems";
import { Link } from "react-router-dom";

function Cart(props) {
  const displayCartItems = props.cart.map((product) => {
    return (
      <CartItems
        key={product.id}
        id={product.id}
        image={product.image}
        name={product.name}
        count={product.count}
        price={product.price}
        totalPrice={product.totalPrice}
        incrementProduct={props.incrementProduct}
        decrementProduct={props.decrementProduct}
        DeleteFromCart={props.DeleteFromCart}
      />
    );
  });
  return (
    <div>
      <h1 className={classes.heading}>Shopping Cart</h1>
      <Table className={classes.table} size="sm">
        <thead>
          <tr>
            <th>Product details</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>{displayCartItems}</tbody>
      </Table>

      <Link className={classes.link} to="/checkout">
        <Stack gap={2} className="col-md-5 mx-auto">
          <Button variant="danger" className={classes.checkout}>
            Checkout
          </Button>
        </Stack>
      </Link>
    </div>
  );
}

export default Cart;
