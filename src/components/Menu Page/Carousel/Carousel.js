import React, { Component }from "react"
import "./carousel.scss"

import img1 from "../Carousel/Carousel Image/images/carosuel-burger-1.jpg"
import img2 from "../Carousel/Carousel Image/images/carosuel-burger-2.jpg"
import img3 from "../Carousel/Carousel Image/images/carosuel-burger-3.jpg"
import img4 from "../Carousel/Carousel Image/images/carosuel-burger-4.jpg"






class Carousel extends Component{
    constructor(){
        super()
        this.state={
            images: [img1,img2,img3,img4],
            count: 0,
            imgHeaders: ["The Classic","The Teriyaki","The Hawaiian","The Stacker"],
            CarouselOff: false,
            imgTransition1: " img-transition-1 carousel-image",
            imgTransition2: "img-transition-2 carousel-image",
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
                count: this.state.count === this.state.images.length - 1? 0: this.state.count + 1,
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
        count: this.state.count === this.state.images.length -1? 0: this.state.count + 1,
        CarouselOff: true,
        imgTransitionToggle: !this.state.imgTransitionToggle
    })
}
    HandleArrowClickLeft(){
        this.setState({
            count: this.state.count === 0 ? this.state.images.length -1 : this.state.count - 1,
            CarouselOff: true,
            imgTransitionToggle: !this.state.imgTransitionToggle
        })
        
    }

    render(){

        const style={
            backgroundImage: `url("${this.state.images[this.state.count]}")`
            
        }

        return(
                
            <div className="carousel-container">
            
            <span> {this.state.imgHeaders[this.state.count]}
            </span>
            <i className="fas fa-arrow-circle-left" onClick={this.HandleArrowClickLeft}/>       
            <div alt="Burger" className={this.state.imgTransitionToggle?this.state.imgTransition1:this.state.imgTransition2} style={style}/> 
            <i className="fas fa-arrow-circle-right" onClick={this.HandleArrowClickRight}/>   
            </div>
        
            
                
        )   
        
    }
}

export default Carousel