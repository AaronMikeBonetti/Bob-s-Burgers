import React, { Component }from "react"
import "./header.scss"
import Navbar from "../Navbar/Navbar";
import {Link} from "react-router-dom"
import { connect } from "react-redux"



class Header extends Component{
    constructor(){
        super()
        this.state={

        }
        this.handleScroll = this.handleScroll.bind(this)
    }

handleScroll(){
    
    window.scroll(0,0)
}
    
    
    render(){
            if(window.screen.width< 900){
            return (
            <div className="header">
            <Link onClick={this.handleScroll}to="/" className="header-title" > Six Guys</Link>
            <Link to="/cart"><i className="fas fa-shopping-cart"><span className="cart-number">{this.props.itemNumber}</span></i></Link>
            <Navbar/>
            </div>
            )
        }
        else{
            return(
            <div className="header">
            <Link onClick={this.handleScroll} to="/" className="header-title">Six Guys</Link>
            <Link  onClick={this.handleScroll} to="/Menu" className="link">Menu</Link>
            <Link onClick={this.handleScroll} to="/Menu" className="link">Order</Link>
            <Link onClick={this.handleScroll} to="/cart"><i className="fas fa-shopping-cart"><span className="cart-number">{this.props.itemNumber}</span></i></Link>
            </div>
            )
        }
        
    }
}

const mapStateToProps= state =>{
    return{
    itemNumber: state.header.itemsInCart
    }
}


export default connect(mapStateToProps)(Header)