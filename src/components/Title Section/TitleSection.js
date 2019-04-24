import React, { Component }from "react"
import "./title-section.scss"

class TitleSection extends Component{
    constructor(){
        super()
        this.state={
            image: "title-container"            
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                image: "title-container hd"
            })
        },100)
    }

    render(){
        return(
            <div className={this.state.image}>
                
                <div className="jumbotron">Burgers Made, The Right Way.</div>
                <div className="six"></div>
                
            </div>
        )
    }
}

export default TitleSection