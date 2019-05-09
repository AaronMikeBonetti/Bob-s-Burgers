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
                        name: "If Looks Could Kale",
                        description:"Heres looking at you, burger. (comes with kale)",
                        price: 6.49
                    },
                    {
                        name: "Bohemian Radishy",
                        description:"Her majesty, Queen of burgers. (comes with radishes)",
                        price: 7.29
                    },
                    {
                        name: "Sweet Home Avocado",
                        description:"Roll Tide! in to taste this burger. (comes with avocado)",
                        price: 8.49
                    },
                    {
                        name: "Gorden Hamsey",
                        description:"Each burger is personally insulted for juiciness. (comes with slices of ham)",
                        price: 7.99
                    },
                    {
                        name: "Olive And Let Die",
                        description:"The names Burger, James burger (comes with olives)",
                        price: 10.79
                    },
                    {
                        name: "Peas And Thank Yous",
                        description:"This burgers got manners so you don't have to. (comes with peas)",
                        price: 8.79
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
