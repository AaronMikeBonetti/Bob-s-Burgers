import React, { Component }from "react"
import { connect } from "react-redux"
import "./cart.scss"
import {removeItemFromCart,addSubtotal} from "../../actions/action-creators";
import CartItem from "./Cart Item/CartItem";
import { Link } from "react-router-dom"


class Cart extends Component{
    constructor(){
        super()
        this.state= {
            handleEditFired: false,
            subtotal: 0
        }
        this.handleRemove = this.handleRemove.bind(this)
        this.getSubtotal = this.getSubtotal.bind(this)
        
        
    }

    componentDidMount(){
        this.getSubtotal()
        
    }

    componentDidUpdate(){
        this.props.addSubtotal(this.state.subtotal)
    }

    getSubtotal(){
        if(this.props.Cart[0]===undefined){
            return
        }
        let prices = this.props.Cart.map(item=>{
            return item.itemInfo[1]
        })
        let reducedValue = prices.reduce((total,currentNum)=>{
            return total + currentNum
        })
        let finalValue = parseFloat(reducedValue).toFixed(2)
        this.setState({
            subtotal: finalValue
        })
    }
    

    handleRemove(props){
       const filterCart = this.props.Cart.filter(item=>{
          return item.itemInfo[2]!== props.itemID
                          
       })
        
       this.props.removeItemFromCart(filterCart)
       
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
    <Link to="/menu"><button className="cart-button">Menu</button></Link>
    <Link to="/checkout"><button className="cart-button">Checkout</button></Link>
    </div> 
       
   let findSubtotal = () =>{
        if(this.props.Cart[0]===undefined){
            return <div><div className="empty-cart">Your Cart is Empty... :(<br/> Lets change that!</div><Link to="/menu"><button className="empty-cart-button">Go to Menu</button></Link></div>
        }
        else{
        return <div className="subtotal">Subtotal: ${this.state.subtotal}</div>
    }
}

                
        return(
            <div className="cart-container">
            <h1 className="cart-title">Your Order</h1>
            
            {CartList}
           <div>{findSubtotal()}</div>
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
        addSubtotal: (subtotal) => dispatch(addSubtotal(subtotal)),
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)