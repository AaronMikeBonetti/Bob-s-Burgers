import React, { Component }from "react"
import { connect } from "react-redux"
import "./cart.scss"
import {removeItemFromCart,addItemToOrder} from "../../actions/action-creators";
import CartItem from "./Cart Item/CartItem";
import { Link } from "react-router-dom"


class Cart extends Component{
    constructor(){
        super()
        this.state= {
            handleEditFired: false
        }
        this.handleRemove = this.handleRemove.bind(this)
        
             
    }
    

    handleRemove(props){
       const filterCart = this.props.Cart.filter(item=>{
          return item.itemInfo[2]!== props.itemID
                          
       })
        
       this.props.removeItemFromCart(filterCart)
       
    }
    
    componentWillUnmount(){
        
    //   this.state.handleEditFired===false?
    //     this.props.history.push("/menu"): this.setState({
    //         handleEditFired: true
    //     })
          
    }
    
        
    render(){
        let count=0
       let CartList =  this.props.Cart.map(item=>
        
           <CartItem key={count++}
           itemID={item.itemInfo[2]}
           item={item.itemInfo[0]} price={item.itemInfo[1]}handleRemove={this.handleRemove} 
           addOns={item.addOns} cookingInstructions={item.cookingInstructions}
           />
        
       )
       let CartButtons =
    this.props.Cart[0]===undefined || 
    <div className="cart-button-container">
    <Link to="/menu"><button className="cart-buttton">Menu</button></Link>
    <Link to="/checkout"><button className="cart-buttton">Checkout</button></Link>
    </div> 
       
       console.log(this.props.Cart)
    let findSubtotal = () =>{
        if(this.props.Cart[0]===undefined){
            return <div><div className="empty-cart">Your Cart is Empty</div><Link to="/menu"><button className="empty-cart-button">Go to Menu</button></Link></div>
        }
        else{
        let prices = this.props.Cart.map(item=>{
            return item.itemInfo[1]
        })
        let reducedValue = prices.reduce((total,currentNum)=>{
            return total + currentNum
        })
        let finalValue = parseFloat(reducedValue).toFixed(2)
        return <div className="subtotal">Subtotal: ${finalValue}</div>
    }
}
                
        return(
            <div className="cart-container">
            <h1 className="cart-title">Your Order</h1>
            
            {CartList}
           <div >{findSubtotal()}</div>
             {CartButtons}          
            </div>
        )
    }
}

const mapStateToProps= state =>{
    return{
    Cart: state.Cart,
    itemsInCart: state.header.itemsInCart,
       
    }
}

const mapDispatchToProps= dispatch =>{
    return{
        removeItemFromCart: (CartItems) => dispatch(removeItemFromCart(CartItems)),
        addItemToOrder: (item) => dispatch(addItemToOrder(item)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)