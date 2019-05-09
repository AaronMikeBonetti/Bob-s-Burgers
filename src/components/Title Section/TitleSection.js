import React, { Component }from "react"
import "./title-section.scss"

class TitleSection extends Component{
    constructor(){
        super()
        this.state={
                  
        }
    }
    

    render(){
        return(
            <div className="title-container">
                {/* <div className="main-page-loading-screen"></div> */}
                
                <div className="jumbotron">"Burgers Made, The Bob Way"<span>- Bob</span></div>
                <div className="six"></div>
                <div className="desktop-sidebar">
                    <p className="sidebar-content">Handcrafted
                        <span>BURGERS <br/>& FRIES</span>
                        since 2011
                    </p>
                </div>
                <div className="icon-container">
                    <div className="icon-fries"></div>
                    <div className="icon-burger"></div>
                    <div className="icon-drink"></div>
                    </div>
                <div className="sidebar-header">
                <h1>BOB'S</h1>
                </div>
                
                <div className="desktop-main-section"></div>
                
            </div>
        )
    }
}

export default TitleSection