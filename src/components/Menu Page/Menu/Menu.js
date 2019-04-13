import React, { Component }from "react"
import { connect } from "react-redux"
import {addItemToOrder} from "../../../actions/action-creators"
import "./menu.scss"
import Carousel from "../Carousel/Carousel"
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
         
            
        }


        this.handleAdd = this.handleAdd.bind(this)
        }
        
        componentDidMount(){
            window.scrollTo(0,0)
        }

        handleAdd(props){
            console.log(props)
            this.props.addItemToOrder(props)
        }
    
    
    
    render(){
      
        const burgers=  
        this.state.item.burgers.map(burger=> <MenuItem key={burger.name} name={burger.name} price={burger.price} discription={burger.discription} handleAdd={this.handleAdd}/>)     
      
    
        return(
            <div>
                
               <Carousel/>
               <h1 className="menu-header">Burgers</h1>
               {burgers}
                  
            </div>
        )
    }
}

const mapStateToProps= state =>{
    return{
       
    }
}
const mapDispatchToProps= dispatch =>{
    return{
        addItemToOrder: (order) => dispatch(addItemToOrder(order)),
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(Menu)