import React, { Component }from 'react'
import { connect } from 'react-redux'
import './cart.scss'
import {removeItemFromCart,addSubtotal,editItemInOrder} from '../../actions/action-creators';
import CartItem from './Cart Item/CartItem';
import { Link } from 'react-router-dom'


class Cart extends Component{
    constructor(){
        super()
        this.state= {
            subtotal: 0
        }
        
        this.handleRemove = this.handleRemove.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.getSubtotal = this.getSubtotal.bind(this)
        
    }

    componentDidMount(){
        window.scroll(0,0)
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

handleEdit(item){
        console.log(item)
        this.handleRemove(item)
        this.props.editItemInOrder(item)
    }

        
    render(){
        let count=0
        let CartList =  this.props.Cart.map(item=>
        
           <CartItem key={count++}
           itemID={item.itemInfo[2]}
           item={item.itemInfo[0]} price={item.itemInfo[1]} handleRemove={this.handleRemove} 
           addOns={item.addOns} cookingInstructions={item.cookingInstructions} handleEdit={this.handleEdit}
           />
        
       )
        let CartButtons =
            this.props.Cart[0]===undefined || 
            <div className='cart-button-container'>
            <Link to='/menu'><button className='cart-button'>Menu</button></Link>
            <Link to='/checkout'><button className='cart-button'>Checkout</button></Link>
            </div> 
       
        
            if(this.props.Cart[0]===undefined){
                return (<div className='empty-cart-page-container'>
                    <div className='empty-cart'>Your Cart is Empty...<br/> Lets change that!
                    <Link to='/menu'><button className='empty-cart-button'>Go to Menu</button></Link>
                    </div>
                    </div>
                    )
                    }
            else{
                return(
                    <div className='cart-page-container'>
                    <div className='cart-container'>
                    <h1 className='cart-title'>Your Order</h1>
                        {CartList}
                        <div className='subtotal'>Subtotal: ${this.state.subtotal}</div>
                        {CartButtons}          
                    </div>
                    </div>
                ) 
            }
                
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
        editItemInOrder: (item) => dispatch(editItemInOrder(item)),
        
        removeItemFromCart: (CartItems) => dispatch(removeItemFromCart(CartItems)),

        addSubtotal: (subtotal) => dispatch(addSubtotal(subtotal)),
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)