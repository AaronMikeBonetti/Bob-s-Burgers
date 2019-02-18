import React, { Component } from "react"
import "./navbar.scss"

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
                    navDisplay:(this.state.classNames.navDisplay=== "nav-hidden" ? "nav-show" :"nav-hidden")
            }       
        }
        )
    }
    
    render(){
        return(
            <div className="navbar-container">
            <ul className={this.state.classNames.navDisplay}>
                <li>Menu</li>
                <li>Locations</li>
                <li>Contact</li>
            </ul>
            <i className={this.state.classNames.navButton}
             onClick={this.HandleDisplayNav}></i>
            </div>
        )
    }
}

export default Navbar