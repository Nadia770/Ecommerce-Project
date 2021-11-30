import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import ProductList from "./components/ProductList/ProductList";
// import { FaDivide } from "react-icons/fa";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
  <Navigation/>
  <Router>
  <ProductList path="/home"/>
  {/* <Cart path="/cart"/> */}
  </Router>
  </div>
  );
}

export default App;
