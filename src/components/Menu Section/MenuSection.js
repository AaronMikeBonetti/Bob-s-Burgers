import React, { Component }from "react"
import "./menu-section.scss"

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
                <div className="box2">See What's Cooking...<a className="box-link"href="https://www.google.com"> MENU</a></div>
                <div className="box3">"The Classic"</div>
                <div className="box4">"The Southwestern Hammy"</div>
                <div className="box5"></div>
                <div className="box6"><i className="fas fa-angle-double-left"></i>Hand Cut Fries Made Daily</div>
                <div className="box7"></div>
                
            </div>
        )
    }
}

export default MenuSection