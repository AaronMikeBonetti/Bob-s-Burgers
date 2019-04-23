import React, {Component} from "react"
import "./Title Section/title-section.scss"
import TitleSection from "C:/Users/ZeroTwoNiner/Documents/MyWebsites/React-Apps/Six Guys/src/components/Title Section/TitleSection.js"
import MenuSection from "C:/Users/ZeroTwoNiner/Documents/MyWebsites/React-Apps/Six Guys/src/components/Menu Section/MenuSection.js"


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