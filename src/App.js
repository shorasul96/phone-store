import React, {Component, Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart/Cart";
import Default from "./components/Default";
import {Switch, Route} from 'react-router-dom';
import Modal from "./components/Modal";

class App extends Component {
    render() {
        return (
           <Fragment>
               <NavBar/>
               <Switch>
                   <Route path={'/'} exact component={ProductList}/>
                   <Route path={'/details'} component={Details}/>
                   <Route path={'/cart'} component={Cart}/>
                   <Route  component={Default}/>
               </Switch>
               <Modal/>
           </Fragment>
        );
    }
}

export default App;
