import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import {createStore, applyMiddleware} from "redux"
import { rootReducer } from "./reducers/rootReducer"
import { connect } from "react-redux"
import Header from "./components/Header/Header"
import Home from "./components/Home"
import Menu from "./components/Menu Page/Menu/Menu"
import Order from './components/Order/Order';
import Cart from "./components/Cart/Cart"
import Checkout from "./components/Checkout/Checkout"



export const intialState = {
  header:{itemsInCart: null},
  Cart:[],
  payPortal:{
    firstName:"",
    lastName:"",
    billingAddress:"",
    cardNumber:"",
    cardCVV:"",
    cardExpirationDate:""
  },
  order:[{name:null}],
    
  }

  

export const store = createStore(rootReducer,intialState,applyMiddleware())

store.subscribe(()=> console.log("store", store.getState()))

function App(){

  
  
    return (
      <BrowserRouter >
      <div className="container">
      <Header />
      <Route onUpdate={()=> window.scrollTo(0,0)} exact path="/" component={Home}/>
      <Route path="/menu" component={Menu}/>
      <Route path="/order" component={Order}/>
      <Route path="/cart" component={Cart}/>
      <Route path="/checkout" component={Checkout}/>
      
      </div>
      </BrowserRouter>
    )
  }

  const componentConnector = connect()
  
  
  export default componentConnector(App);







