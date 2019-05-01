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
                        description:"Lettuce, cheese, bacon, beef. Everything you need, nothing you don't.",
                        price: 6.49
                    },
                    {
                        name: "Southwestern",
                        description:"Need something with a little kick? Lettuce, pepper jack, jalapenos, all with our house made sweet and spicy ranch.",
                        price: 7.29
                    },
                    {
                        name: "Teriyaki",
                        description:"Sweet and tangy, tomato, onion, pineapple, American cheese and bbq sauce.",
                        price: 8.49
                    },
                    {
                        name: "Hawaiian",
                        description:"poultry and beef, never tasted so good, gilled chicken breast, lettuce, tomato, american cheese, spicy mayo.",
                        price: 7.99
                    },
                    {
                        name: "Stacker",
                        description:"When one is never enough. Comes with 2 paddies, 4 buns, all business! lettuce, onions, american cheese and our special sauce.",
                        price: 10.79
                    },
                    {
                        name: "Porto",
                        description:"Meaty and juicy, marinated portobello mushrooms, red peppers, provolone on a seasoned patty. ",
                        price: 10.79
                    },
                    
                ]
                
            },

    }


        this.handleAdd = this.handleAdd.bind(this)
        }

        componentDidMount(){
            window.scroll(0,0)
        }
        
        

        handleAdd(props){
            this.props.addItemToOrder(props)
        }
    
    
    
    render(){
        const burgers=  
            this.state.item.burgers.map(burger=> <MenuItem key={burger.name} itemID={`${burger.name}${Math.random()}`} name={burger.name} price={burger.price} description={burger.description} handleAdd={this.handleAdd}/>)     
        return(
            <div className="menu-page-container">
                
            <Carousel/>
            <h1 className="menu-header">Burgers</h1>
            <div className="menu-items-list-container">
            {burgers}
            </div>
            </div>
        )
    }
}


const mapDispatchToProps= dispatch =>{
    return{
        addItemToOrder: (order) => dispatch(addItemToOrder(order)),
    }
}



export default connect(null,mapDispatchToProps)(Menu)
