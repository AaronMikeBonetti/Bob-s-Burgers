import React, { Component }from "react"
import "./menu-section.scss"
import { Link } from "react-router-dom"



class MenuSection extends Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){

        return(
            <div className="menu-container">
            
                <div className="box1">We Use Only The Freshest Ingredients!</div>
                <div className="box2">See What's Cooking...
                <Link to="/menu" className="box-link">Menu</Link>
                </div>
                <div className="box3"><Link to="/menu">"The Hawaiian"</Link></div>
                <div className="box4"><Link to="/menu">"The Southwestern"</Link></div>
                <div className="box5"><Link to="/menu">&&&&&&</Link></div>
                <div className="box6"><i className="fas fa-angle-double-left"></i>Hand Cut Fries Made Daily</div>
                <div className="box7">Grilled to perfection,<br/> any way you want it.</div>
                <div className="box8"><Link to="/menu">"The Porto"</Link></div>
                <div className="box9"><p>Hungry? You've come to the right place.</p></div>
                <div className="box10"><Link to="/menu">"The Classic"</Link></div>
                
                 
            </div>
        )
    }
}

export default MenuSection