import React from "react";
import ProductCard from "./ProductCard/ProductCard";
import classes from "./ProductList.module.css";

function ProductList(props) {
  const displayProductList = props.productList.map((product) => {
    return (
      <ProductCard
        key={product.id}
        name={product.name}
        price={product.price}
        description={product.description}
        image={product.image}
        handleShowLogin={props.handleShowLogin}
      />
    );
  });
  return (
    <div>
      <div className={classes.list}>{displayProductList}</div>
    </div>
  );
}

export default ProductList;
