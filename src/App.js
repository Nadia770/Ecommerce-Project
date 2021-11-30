import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation/Navigation";
import ProductList from "./components/ProductList/ProductList";
import Login from "./components/Login/Login";
import { FaDivide } from "react-icons/fa";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [loginDetails, setLoginDetails] = useState({});

  //Login functionaility
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  const handleChangeEmail = (e) =>
    setLoginDetails({ email: e.target.value, password: loginDetails.password });
  const handleChangePassword = (e) =>
    setLoginDetails({
      email: loginDetails.email,
      password: e.target.value,
    });
  const handleSubmitLogin = (e) => {
    e.preventDefault();
    console.log(loginDetails);
  };

  const productList = [
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
  return (
    <div>
      <Navigation></Navigation>
      <Router>
        <ProductList
          path="/home"
          productList={productList}
          handleShowLogin={handleShowLogin}
        ></ProductList>
        <Login
          path="/login"
          handleCloseLogin={handleCloseLogin}
          showLogin={showLogin}
          handleChangeEmail={handleChangeEmail}
          handleChangePassword={handleChangePassword}
          handleSubmitLogin={handleSubmitLogin}
        ></Login>
      </Router>
    </div>
  );
}

export default App;
