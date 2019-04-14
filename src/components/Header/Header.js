import React, { Component }from "react"
import "./header.css"
import Navbar from "../Navbar/Navbar";
import {Link} from "react-router-dom"
import { connect } from "react-redux"



class Header extends Component{
    constructor(){
        super()
        this.state={

        }
    }
    
    render(){
        return(
            <div className="header">
            <Link to="/" className="header-title">Six Guys</Link>
            <Link to="/Checkout"><i className="fas fa-shopping-cart"><span className="checkout-number">{this.props.itemNumber}</span></i></Link>
            
            <Navbar/>
            </div>
        )
    }
}

const mapStateToProps= state =>{
    return{
    itemNumber: state.header.itemsInCheckout
    }
}


export default connect(mapStateToProps)(Header)