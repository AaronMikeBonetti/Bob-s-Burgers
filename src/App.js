import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import {createStore, applyMiddleware} from "redux"
import { rootReducer } from "./reducers/rootReducer"
import { connect } from "react-redux"
import Header from "./components/Header/Header"
import Home from "./components/Home"
import Menu from "./components/Menu Page/Menu/Menu"
import Order from './components/Order/Order';
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
  order:[{name:"test"}],
  
      
  }

// console.log(intialState.checkout)
export const store = createStore(rootReducer,intialState,applyMiddleware())

store.subscribe(()=> console.log("store", store.getState()))

function App(){
  
    return (
      <BrowserRouter>
      <div className="container">
      <Header />
      <Route exact path="/" component={Home}/>
      <Route path="/menu" component={Menu}/>
      <Route path="/order" component={Order}/>
      {/* <Route path="/" component={Checkout}/> */}
      
      </div>
      </BrowserRouter>
    )
  }

  const componentConnector = connect()
  
  
  export default componentConnector(App);







