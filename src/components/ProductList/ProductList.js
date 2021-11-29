import React from "react";
import ProductCard from "./ProductCard/ProductCard";
import classes from "./ProductList.module.css";

function ProductList() {
  return (
    <div>
      <div className={classes.list}>
        <ProductCard
          name="Pineapple"
          price="£5"
          description="Ripe Pinapple"
          img="https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJ1aXR8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60/"
        />
        <ProductCard
          name="Strawberries"
          price="£5"
          description="Ripe Pinapple"
          img="https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJ1aXR8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60"
        />
        <ProductCard
          name="Oranges"
          price="£5"
          description="Ripe Pinapple"
          img="https://images.unsplash.com/photo-1557800636-894a64c1696f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZnJ1aXR8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60"
        />
        <ProductCard
          name="Bananas"
          price="£5"
          description="Ripe Pinapple"
          img="https://images.unsplash.com/photo-1528825871115-3581a5387919?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
        />
      </div>
    </div>
  );
}

export default ProductList;
