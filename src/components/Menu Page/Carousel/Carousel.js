import React, { Component }from "react"
import "./carousel.scss"
import img1 from "C:/Users/ZeroTwoNiner/Documents/MyWebsites/React-Apps/Six Guys/src/components/Menu Page/Carousel/Carousel Image/imgs/carosuel-burger-1.jpg"
import img2 from "C:/Users/ZeroTwoNiner/Documents/MyWebsites/React-Apps/Six Guys/src/components/Menu Page/Carousel/Carousel Image/imgs/carosuel-burger-2.jpg"
import img3 from "C:/Users/ZeroTwoNiner/Documents/MyWebsites/React-Apps/Six Guys/src/components/Menu Page/Carousel/Carousel Image/imgs/carosuel-burger-3.jpg"
import img4 from "C:/Users/ZeroTwoNiner/Documents/MyWebsites/React-Apps/Six Guys/src/components/Menu Page/Carousel/Carousel Image/imgs/carosuel-burger-4.jpg"



class Carousel extends Component{
    constructor(){
        super()
        this.state={
            imgs: [img1,img2,img3,img4],
            count: 0,
            imgHeaders: ["The Classic","The Teriyaki","The Hawaian","The Stacker"]
        }
        this.handleEvent = this.handleEvent.bind(this)
        this.HandleArrowClickRight = this.HandleArrowClickRight.bind(this)
        this.HandleArrowClickLeft = this.HandleArrowClickLeft.bind(this)
        this.imgInterval = this.imgInterval.bind(this)
        
    }
   imgInterval(){
    setInterval(() => {
        this.setState({
            count: this.state.count === this.state.imgs.length - 1? 0: this.state.count + 1
           })
       }, 5000);
   }
componentDidMount(){
    this.imgInterval()
   }
    

    handleEvent(e){
        e.preventDefault()
        const { name,value } = e.target
        this.setState({
          [name] : value
        })
      }
    HandleArrowClickRight(){
        clearInterval(this.imgInterval)
       this.setState({
        count: this.state.count === this.state.imgs.length -1? 0: this.state.count + 1
       })
       
    }
    HandleArrowClickLeft(){
        clearInterval(this.imgInterval)
        this.setState({
            count: this.state.count === 0 ? this.state.imgs.length -1 : this.state.count - 1
        })
        
    }

    render(){
       const style={
            backgroundImage: `url("${this.state.imgs[this.state.count]}")`
        }
        return(
            <div className="carousel-container">
            <a href="#"> {this.state.imgHeaders[this.state.count]}</a>
            <i className="fas fa-arrow-circle-left" onClick={this.HandleArrowClickLeft}/>
               <div alt="Burger" className="carousel-image" style={style}/>
               <i className="fas fa-arrow-circle-right" onClick={this.HandleArrowClickRight}/>
            </div>
        )
    }
}

export default Carousel