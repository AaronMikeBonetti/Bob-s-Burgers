import React from 'react'
import './menu-item.scss'
import { Link } from 'react-router-dom'



function MenuItem(props){
    
        return(
            
            <div className='menu-item-container'>
            <Link to='/order' className='menu-item-name' onClick={() => props.handleAdd(props)}>{props.name}</Link>
            <hr></hr>
            <div className='menu-description'>{props.description}</div>
            <div className='menu-item-price'>{props.price}</div>
            <Link to='/order' onClick={() => props.handleAdd(props)}className='menu-item-button'><i className='fas fa-plus-square'></i></Link>
            </div>
            
        )
    
}

export default MenuItem