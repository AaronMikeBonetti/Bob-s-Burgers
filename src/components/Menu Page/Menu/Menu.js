import React, { Component }from "react"
import "./menu.scss"
import Carousel from "C:/Users/ZeroTwoNiner/Documents/MyWebsites/React-Apps/Six Guys/src/components/Menu Page/Carousel/Carousel.js"


class Menu extends Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        return(
            <div className="Menu-container">
               <Carousel/>
            </div>
        )
    }
}

export default Menu