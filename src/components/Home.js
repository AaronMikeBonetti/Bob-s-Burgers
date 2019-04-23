import React, {Component} from "react"
import "./Title Section/title-section.scss"
import TitleSection from "./Title Section/TitleSection"
import MenuSection from "./Menu Section/MenuSection"


class Home extends Component{
    componentDidMount(){
        window.scrollTo(0,0)
    } 
    render(){
        return(
        <div className="home-container">
            <TitleSection/>
            <MenuSection/>
        </div>
    )
}
}

export default Home