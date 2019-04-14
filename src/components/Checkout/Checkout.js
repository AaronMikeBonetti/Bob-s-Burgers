import React, { Component }from "react"
import { connect } from "react-redux"
import "./checkout.scss"
import {} from "../../actions/action-creators";
import CheckoutItem from "./Checkout Item/CheckoutItem";
// import { Link } from "react-router-dom"
// import {store} from "../../App"

class Checkout extends Component{
    constructor(){
        super()
        this.state= {
            
        }
        this.handleRemove = this.handleRemove.bind(this)
        
    }

    handleRemove(){
        console.log("HI")
    }

  
    
    
    render(){
        let count = 0
       const checkoutList =  this.props.checkout.map(item=>
        
           <CheckoutItem key={count++} item={item.itemInfo[0]} price={item.itemInfo[1]} handleRemove={this.handleRemove()} addOns={item.addOns} cookingInstructions={item.cookingInstructions}/>
        
       )

    
        
        
    let findSubtotal = () =>{
        if(this.props.checkout[0]===undefined){
            return <div className="empty-cart">Your Cart is Empty</div>
        }
        else{
        let prices = this.props.checkout.map(item=>{
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
            <div className="checkout-container">
            <h1 className="checkout-title">Your Order</h1>
            
            {checkoutList}
           <div >{findSubtotal()}</div>
                        
            </div>
        )
    }
}


const mapStateToProps= state =>{
    return{
    checkout: state.checkout,
    itemsInCheckout: state.header.itemsInCheckout,
    paymentInfo: state.payPortal

   
    }
}






const mapDispatchToProps= dispatch =>{
    return{
        // addItemToCheckout: (order) => dispatch(addItemToCheckout(order)),
    }
}




export default connect(mapStateToProps,mapDispatchToProps)(Checkout)