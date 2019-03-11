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
                
                <div className="jumbotron">Burgers Made, The Right Way.</div>
                <div className="six"></div>
                
            </div>
        )
    }
}

export default TitleSection