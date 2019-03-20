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
            imgHeaders: ["The Classic","The Teriyaki","The Hawaian","The Stacker"],
            CarouselOff: false,
            imgTransition1: " imgTransition1 carousel-container",
            imgTransition2: "imgTransition2 carousel-container",
            imgTransitionToggle: true
        }
        this.HandleArrowClickRight = this.HandleArrowClickRight.bind(this)
        this.HandleArrowClickLeft = this.HandleArrowClickLeft.bind(this)
       
        
    }
  
    
   
componentDidMount(){
    this.imgInterval =   
        setInterval(() => {
            if(this.state.CarouselOff === false){
            this.setState({
                count: this.state.count === this.state.imgs.length - 1? 0: this.state.count + 1,
               imgTransitionToggle: !this.state.imgTransitionToggle
               })
           }
        }, 5000);
   }
componentWillUnmount(){
    clearInterval(this.imgInterval)
}
    
    HandleArrowClickRight(){
        
       this.setState({
        count: this.state.count === this.state.imgs.length -1? 0: this.state.count + 1,
        CarouselOff: true,
        imgTransitionToggle: !this.state.imgTransitionToggle
       })
       
    }
    HandleArrowClickLeft(){
        this.setState({
            count: this.state.count === 0 ? this.state.imgs.length -1 : this.state.count - 1,
            CarouselOff: true,
            imgTransitionToggle: !this.state.imgTransitionToggle
        })
        
    }
     

    render(){
        
       const style={
            backgroundImage: `url("${this.state.imgs[this.state.count]}")`,
            
            
            
        }
        
        
        return(
                
            <div className={this.state.count%2?this.state.imgTransition1:this.state.imgTransition2}>
            <a href="https://www.google.com"> {this.state.imgHeaders[this.state.count]}</a>
            <i className="fas fa-arrow-circle-left" onClick={this.HandleArrowClickLeft}/>       
            <div alt="Burger" className="carousel-image"style={style}/> 
            <i className="fas fa-arrow-circle-right" onClick={this.HandleArrowClickRight}/>   
            </div>
        
            
                
        )   
        
    }
}

export default Carousel