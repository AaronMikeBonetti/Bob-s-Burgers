import React, { Component }from 'react'
import './menu-section.scss'
import { Link } from 'react-router-dom'



class MenuSection extends Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){

        return(
            <div className='menu-container'  id='menu-section-component'>
                <div className='box1'>Family Owned and Operated (mostly)</div>
                <div className='box2'>See What's Cooking...
                <Link to='/menu'>Menu</Link>
                </div>
                <div className='box3'><Link to='/menu'>"Bohemian Radishy"</Link></div>
                <div className='box4'>Classic American Style Diner.</div>
                <div className='box5'><Link  to='/menu'>"Peas and Thank You"</Link></div>
                <div className='box6'><i className='fas fa-angle-double-left'></i>Burger of the Day</div>
                <div className='box7'>Grilled to Perfection</div>
                <div className='box8'><Link to='/menu'>"If Looks Could Kale"</Link></div>
                <div className='box9'><p>Hungry? You've come to the Right Place.</p></div>
                <div className='box10'><Link to='/menu'>"Olive And Let Die"</Link></div>
            </div>
        )
    }
}

export default MenuSection