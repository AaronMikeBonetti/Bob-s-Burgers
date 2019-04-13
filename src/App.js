import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import {createStore, applyMiddleware} from "redux"
import { rootReducer } from "./reducers/rootReducer"
import { connect } from "react-redux"
import Header from "./components/Header/Header"
import Home from "./components/Home"
import Menu from "./components/Menu Page/Menu/Menu"
import Order from './components/Order/Order';
import Checkout from "./components/Checkout/Checkout"


export const intialState = {
  nav:{itemsInCheckout: 0},
  checkout:[],
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

// console.log(intialState.checkout)
export const store = createStore(rootReducer,intialState,applyMiddleware())

store.subscribe(()=> console.log("store", store.getState()))

function App(){

  
  
    return (
      <BrowserRouter >
      <div className="container">
      <Header />
      <Route onUpdate={()=> window.scrollTo(0,0)} exact path="/home" component={Home}/>
      <Route path="/menu" component={Menu}/>
      <Route path="/order" component={Order}/>
      <Route path="/checkout" component={Checkout}/>
      
      </div>
      </BrowserRouter>
    )
  }

  const componentConnector = connect()
  
  
  export default componentConnector(App);







