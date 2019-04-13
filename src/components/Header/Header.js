import React, { Component }from "react"
import "./header.css"
import Navbar from "../Navbar/Navbar";
import {Link} from "react-router-dom"



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
           
            <Navbar/>
            </div>
        )
    }
}

export default Header