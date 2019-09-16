import React from "react"
import "./menu-item.scss"
import { Link } from "react-router-dom"



function MenuItem(props){
    
        return(
            
            <div className="menu-item-container">
            <Link to="/order"><div className="menu-item-name" onClick={() => props.handleAdd(props)}>{props.name}</div></Link>
            <div className="menu-description">{props.description}</div>
            <div className="menu-item-price">{props.price}</div>
            <Link to="/order"><button onClick={() => props.handleAdd(props)}className="menu-item-button"><i className="fas fa-plus-square"></i></button></Link>
            </div>
            
        )
    
}

export default MenuItem