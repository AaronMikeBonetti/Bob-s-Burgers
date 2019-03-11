import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Header from "./components/Header/Header"
import Home from "./components/Home"
import Menu from "./components/Menu Page/Menu/Menu"

function App(){
  
    return (
      <BrowserRouter>
      <div className="container">
      <Header />
      <Route exact path="/" component={Home}/>
      <Route path="/menu" component={Menu}/>
      {/* <Route path="/" component={Locations}/> */}
      {/* <Route path="/" component={Contact}/> */}
      
      </div>
      </BrowserRouter>
    )
  }


export default App;







