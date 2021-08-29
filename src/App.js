import React,{ component }from 'react';
import {Switch,Route} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Def from "./components/Def";
import Modal from './components/Modal';
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component ={ProductList} />
        <Route path="/Details" component={Details} />
        <Route path="/Cart" component={Cart} />
        {/* <Route component={Default} /> */}
        <Route component={Def} />
      </Switch>
      <Modal />
    </React.Fragment>
    
  );
}

export default App;