import React, { Component } from "react"
import "./navbar.scss"
import { Link } from "react-router-dom"

class Navbar extends Component{
    constructor(){
        super()
        this.state={
            navLinks:["Home","Menu","Cart"],
            classNames:{
                navButton:"fas fa-hamburger",
                navDisplay: "nav-hidden"
            }
        }
        this.HandleDisplayNav = this.HandleDisplayNav.bind(this)
        this.HandleNavAnimation = this.HandleNavAnimation.bind(this)
        this.handleReset = this.handleReset.bind(this)
        
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

    handleReset(){
        window.scroll(0,0) 
        this.setState(
        {     
            classNames:{
                    navButton:(this.state.classNames.navButton=== "fas fa-hamburger" ?"fas fa-hamburger fa-hamburger-active" :"fas fa-hamburger"),
                    navDisplay: "nav-hidden"
            }       
        }
        )
        
    }
    
    
    render(){

    const navLinks = this.state.navLinks.map(link =>{
        return  <Link key={link} to={link==="Home" ? "/" :`/${link}`}><li  onClick={this.handleReset}>{link}</li></Link>
    })
        return(
            <div className="navbar-container">
            <ul className={this.state.classNames.navDisplay}>
            {navLinks}   
            </ul>
            <i className={this.state.classNames.navButton}
             onClick={this.HandleDisplayNav}></i>
            </div>
        )
    }
}

export default Navbar