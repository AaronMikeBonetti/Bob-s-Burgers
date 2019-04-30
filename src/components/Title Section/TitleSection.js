import React, { Component }from "react"
import "./title-section.scss"

class TitleSection extends Component{
    constructor(){
        super()
        this.state={
            image: "title-container"        
        }
    }
    

    render(){
        return(
            <div className={this.state.image}>
                
                <div className="jumbotron">Burgers Made, The Right Way.</div>
                <div className="six"></div>
                <div className="desktop-sidebar">
                    <p className="sidebar-content">Handcrafted
                        <span>BURGERS <br/>& FRIES</span>
                        since 1987
                    </p>
                </div>
                <div className="icon-container">
                    <div className="icon-fries"></div>
                    <div className="icon-burger"></div>
                    <div className="icon-drink"></div>
                    </div>
                <div className="sidebar-header">
                <h1>SIX GUYS</h1>
                </div>
                
                <div className="desktop-main-section"></div>
                
            </div>
        )
    }
}

export default TitleSection