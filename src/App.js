import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation/Navigation";
import ProductList from "./components/ProductList/ProductList";
import Login from "./components/Login/Login";

import Cart from "./components/Cart/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [loginDetails, setLoginDetails] = useState({});
  const [productList, setProductList] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [amendedProduct, setAmendedProduct] = useState({});

  //Login Modal functionaility
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  const handleChangeUserName = (e) =>
    setLoginDetails({
      username: e.target.value,
      password: loginDetails.password,
    });
  const handleChangePassword = (e) =>
    setLoginDetails({
      username: loginDetails.username,
      password: e.target.value,
    });

  //Login
  // function userLogin() {
  //   return fetch(`http://localhost:8080/login`, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(loginDetails),
  //   });
  // }
  const handleSubmitLogin = (e) => {
    e.preventDefault();
    console.log(loginDetails);
    // userLogin();
  };

  //Get product List
  function fetchProductList() {
    fetch("http://localhost:8080/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProductList(data);
      });
  }

  useEffect(() => {
    fetchProductList();
  }, []);

  //Get cart products
  function fetchCartProducts() {
    fetch(`http://localhost:8080/cart`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCartProducts(data);
        console.log(data);
      });
  }

  //Add product to cart
  function addToCart(id) {
    const addedProduct = productList.filter((product) => product.id === id);
    console.log(JSON.stringify(addedProduct));
    return fetch("http://localhost:8080/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addedProduct),
    });
  }

  //Increment product in cart
  function incrementProduct(id) {
    const addProduct = productList.filter((product) => product.id === id);
    addProduct[0].count++;
    fetch(`http://localhost:8080/cart/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addProduct[0]),
    });
    fetchCartProducts();
  }

  //Decrement product in cart
  function decrementProduct(id) {
    fetch(`http://localhost:8080/cart/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      // body: JSON.stringify(),
    });
  }

  //search functionality
  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const filteredProductList = productList.filter((product) => {
        return product.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setSearchResults(filteredProductList);
    } else {
      setSearchResults(productList);
    }
  };

  return (
    <div>
      <Router>
        <Navigation
          handleShowLogin={handleShowLogin}
          fetchCartProducts={fetchCartProducts}
          searchTerm={searchTerm}
          searchHandler={searchHandler}
        ></Navigation>
        <Login
          handleCloseLogin={handleCloseLogin}
          showLogin={showLogin}
          handleChangeUserName={handleChangeUserName}
          handleChangePassword={handleChangePassword}
          handleSubmitLogin={handleSubmitLogin}
        ></Login>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <ProductList
                productList={
                  searchTerm.length < 1 ? productList : searchResults
                }
                addToCart={addToCart}
              ></ProductList>
            }
          ></Route>
          <Route
            path="/cart"
            element={
              <Cart
                cart={cartProducts}
                incrementProduct={incrementProduct}
                decrementProduct={decrementProduct}
              ></Cart>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
