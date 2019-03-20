import React, { Component } from "react"
import "./navbar.scss"
import { Link } from "react-router-dom"

class Navbar extends Component{
    constructor(){
        super()
        this.state={
            classNames:{
                navButton: "fas fa-hamburger",
                navDisplay: "nav-hidden"
            }
        }
        this.HandleDisplayNav = this.HandleDisplayNav.bind(this)
        this.HandleNavAnimation = this.HandleNavAnimation.bind(this)
    }
    HandleNavAnimation(){
        this.setState({
            classNames:{
                navButton:(this.state.classNames.navButton=== "fas fa-hamburger" ?"fas fa-hamburger fa-hamburger-active" :"fas fa-hamburger")}
    })
}
    HandleDisplayNav(){ 
        this.setState({     
            classNames:{
                    navButton:(this.state.classNames.navButton=== "fas fa-hamburger" ?"fas fa-hamburger fa-hamburger-active" :"fas fa-hamburger"),
                    navDisplay:
                    (this.state.classNames.navDisplay=== "nav-hidden" ? "nav-show" :"nav-hidden")
            }       
        }
        )
    }
    
    render(){
        return(
            <div className="navbar-container">
            <ul className={this.state.classNames.navDisplay}>
            <Link to="/"><li>Home</li></Link>
            <Link to="/menu"><li>Menu</li></Link>
            <Link to="/location"><li>Locations</li></Link>
            <Link to="/contact"><li>Contact</li></Link>
                
            </ul>
            <i className={this.state.classNames.navButton}
             onClick={this.HandleDisplayNav}></i>
            </div>
        )
    }
}

export default Navbar