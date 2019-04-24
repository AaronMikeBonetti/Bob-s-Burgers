import React, { Component }from "react"
import "./menu-section.scss"
import {Link} from "react-router-dom"


class MenuSection extends Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        return(
            <div className="menu-container">
                <div className="box1">We Use Only The Most Fresh Ingredients</div>
                <div className="box2">See What's Cooking...
                <Link to="/menu" className="box-link">Menu</Link>
                </div>
                <div className="box3">"The Hawaiian"</div>
                <div className="box4">"The Southwestern"</div>
                <div className="box5"></div>
                <div className="box6"><i className="fas fa-angle-double-left"></i>Hand Cut Fries Made Daily</div>
                <div className="box7">"The Classic"</div>
                
            </div>
        )
    }
}

export default MenuSection