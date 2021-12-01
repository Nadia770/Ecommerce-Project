import React from "react";
import Table from "react-bootstrap/Table";
import classes from "./Cart.module.css";
import Button from "react-bootstrap/Button";
import CartItems from "./CartItems/CartItems";

function Cart(props) {
  const displayCartItems = props.cart.map((product) => {
    return (
      <CartItems
        image={product.image}
        name={product.name}
        quantity={product.quantity}
        price={product.price}
        totalPrice={product.totalPrice}
      />
    );
  });
  return (
    <div className={classes.cart}>
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
        <Button variant="danger" className={classes.checkout}>
          Checkout
        </Button>
      </Table>
    </div>
  );
}

export default Cart;
