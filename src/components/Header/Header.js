import React, { Component }from "react"
import "./header.css"
import Navbar from "../Navbar/Navbar";


class Header extends Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        return(
            <div className="header">
            <h2 className="header-title">Six Guys</h2>
            <Navbar/>
            </div>
        )
    }
}

export default Header