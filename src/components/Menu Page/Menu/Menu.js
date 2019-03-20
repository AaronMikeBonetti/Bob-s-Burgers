import React, { Component }from "react"
import "./menu.scss"
import Carousel from "C:/Users/ZeroTwoNiner/Documents/MyWebsites/React-Apps/Six Guys/src/components/Menu Page/Carousel/Carousel.js"
import MenuItem from "./Menu Item/MenuItem"


class Menu extends Component{
    constructor(){
        super()
        this.state={
            item:{
                burgers:[
                    {
                        name: "Classic",
                        discription:"Lettuce, cheese, beef. Everything you need, nothing you don't",
                        price: "$6.49"
                    },
                    {
                        name: "Southwestern",
                        discription:"Lettuce, cheese, beef. Everything you need, nothing you don't",
                        price: "$7.29"
                    },
                   {
                        name: "Teriyaki",
                        discription:"Lettuce, cheese, beef. Everything you need, nothing you don't",
                        price: "$8.49"
                    },
                     {
                        name: "Hawaiian",
                        discription:"Lettuce, cheese, beef. Everything you need, nothing you don't",
                        price: "$7.99"
                    },
                    {
                        name: "Stacker",
                        discription:"Lettuce, cheese, beef. Everything you need, nothing you don't",
                        price: "$10.79"
                    },
                    
                ]
                },
            checkout:{
                items:[],
                finalPrice:0       
            }
            }
        }
    
    
    render(){
        const burgers=  
        this.state.item.burgers.map(burger=> <MenuItem key={burger.name} name={burger.name} price={burger.price} discription={burger.discription}/>)     
      
    
        return(
            <div>
                
               <Carousel/>
               <h1 className="menu-header">Burgers</h1>
               {burgers}
                  
            </div>
        )
    }
}

export default Menu