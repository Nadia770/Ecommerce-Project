import React from "react";
import Table from "react-bootstrap/Table";
import classes from "./Cart.module.css";
import Button from "react-bootstrap/Button";
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
        productCount={props.productCount}
        setProductCount={props.setProductCount}
        countOfProducts={props.countOfProducts}
        DeleteFromCart={props.DeleteFromCart}
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
      </Table>
      <Button variant="danger" className={classes.checkout}>
       <Link to="/checkout">Checkout</Link> 
      </Button>
    </div>
  );
}

export default Cart;
