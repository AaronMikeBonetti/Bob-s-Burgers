import React from "react"
import "./menu-item.scss"



function MenuItem(props){
   
    
        return(
            <div>
           
            <div className="menu-item-container">
            <div className="menu-item-name">{props.name}</div>
            <div className="menu-discription">{props.discription}</div>
            <div className="menu-item-price">{props.price}</div>
            <button className="menu-item-button"><i className="fas fa-plus-square"></i></button> 
            </div>
            </div>
        )
    
}

export default MenuItem