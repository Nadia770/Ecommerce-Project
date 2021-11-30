import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation/Navigation";
import ProductList from "./components/ProductList/ProductList";
import Login from "./components/Login/Login";
import Cart from "./components/Cart/Cart";
import { FaDivide } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [loginDetails, setLoginDetails] = useState({});
  const [productList, setProductList] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

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
  const handleSubmitLogin = (e) => {
    e.preventDefault();
    console.log(loginDetails);
  };

  // //Login
  // function Login(userID) {
  //   return fetch(`http://localhost:8080/cart/${userID}`, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     // body: JSON.stringify(newContact),
  //   });

  //Get product List
  function fetchProductList() {
    fetch("http://localhost:8080/product")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProductList(data);
      });
  }

  // useEffect(() => {
  //   fetchProductList();
  //   console.log(productList);
  // }, []);

  //Get cart products
  function fetchCartProducts(userID) {
    fetch(`http://localhost:8080/cart/${userID}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCartProducts(data);
      });
  }

  //Add product to cart
  function addToCart(userID) {
    return fetch(`http://localhost:8080/cart/${userID}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // body: JSON.stringify(newContact),
    });
  }

  //Decrement product in cart
  function decrementProduct(userID) {
    fetch(`http://localhost:8080/contact/${userID}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      // body: JSON.stringify(editedContact),
    });
  }

  const testProductList = [
    {
      id: 1,
      name: "Pineapple",
      price: "£5",
      image:
        "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJ1aXR8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60/",
      description: "Ripe Pineapple",
    },
    {
      id: 2,
      name: "Pineapple",
      price: "£5",
      image:
        "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJ1aXR8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60",
      description: "Ripe Pineapple",
    },
    {
      id: 3,
      name: "Pineapple",
      price: "£5",
      image:
        "https://images.unsplash.com/photo-1557800636-894a64c1696f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZnJ1aXR8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60",
      description: "Ripe Pineapple",
    },
    {
      id: 4,
      name: "Pineapple",
      price: "£5",
      image:
        "https://images.unsplash.com/photo-1528825871115-3581a5387919?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80",
      description: "Ripe Pineapple",
    },
  ];

  const testCart = [
    {
      id: 1,
      name: "Pineapple",
      price: "£5",
      image:
        "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJ1aXR8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60/",
      quantity: "2",
      totalPrice: "£10",
    },
    {
      id: 2,
      name: "Pineapple",
      price: "£5",
      image:
        "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJ1aXR8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60",
      quantity: "2",
      totalPrice: "£10",
    },
  ];
  return (
    <div>
      <Router>
        <Navigation handleShowLogin={handleShowLogin}></Navigation>
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
                productList={testProductList}
                handleShowLogin={handleShowLogin}
              ></ProductList>
            }
          ></Route>
          <Route path="/cart" element={<Cart cart={testCart}></Cart>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
