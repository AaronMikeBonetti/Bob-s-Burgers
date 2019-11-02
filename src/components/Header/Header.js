import React, { Component }from 'react'
import './header.scss'
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'




class Header extends Component{
    constructor(){
        super()
        this.state={

        }
        
    }
    
    render(){
            if(window.screen.width < 1200){
            return (
            <div className='header'>
            <Link onClick={()=>window.scroll(0,0)} to='/' className='header-title' ><div className='header-logo-img'></div></Link>
            <Link to='/cart'><i className='fas fa-shopping-cart'><span className='cart-number'>{this.props.itemNumber}</span></i></Link>
            <Navbar/>
            </div>
            )
        }
        else{
            return(
            <div className='header'>
            <Link onClick={()=>window.scroll(0,0)} to='/' className='header-title'>
            <div className='header-logo-img'></div>
            </Link>
            <Link  onClick={()=>window.scroll(0,0)} to='/Menu' className='link'>Menu</Link>
            <Link  onClick={()=>window.scroll(0,0)} to='/About' className='link'>About</Link>
            
            <Link onClick={()=>window.scroll(0,0)} to='/cart'><i className='fas fa-shopping-cart'><span className='cart-number'>{this.props.itemNumber}</span></i></Link>
            </div>
            )
        }
        
    }
}

const mapStateToProps= state =>{
    return{
    itemNumber: state.header.itemsInCart
    }
}


export default connect(mapStateToProps)(Header)