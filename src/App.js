import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import ProductList from "./components/ProductList/ProductList";
import { FaDivide } from "react-icons/fa";
import { Router } from "@reach/router";

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <Router>
        <ProductList path="/home"></ProductList>
      </Router>
    </div>
  );
}

export default App;
