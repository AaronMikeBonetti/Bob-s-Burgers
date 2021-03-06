import React, { Component }from 'react'
import './title-section.scss'

class TitleSection extends Component{
    constructor(){
        super()
        this.state={
                  menuSectionClass: null
        }
    }
    componentDidMount(){
        this.setState({menuSectionClass: document.getElementById('menu-section-component')})
    }

    render(){
        
        return(
            
            <div className='title-container'>
                <div className='desktop-sidebar'>
                    <p className='sidebar-content'>Handcrafted
                        <span>BURGERS <br/>& FRIES</span>
                        since 2011
                    </p>
                </div>
                <div className='icon-container'>
                    <div className='icon-fries'></div>
                    <div className='icon-burger'></div>
                    <div className='icon-drink'></div>
                    </div>
                <button onClick={()=>this.state.menuSectionClass.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'})} 
                className='call-to-action-button'>
                    <i className='fas fa-angle-down'></i>
                    <i className='fas fa-angle-down'></i>
                    <i className='fas fa-angle-down'></i>
                </button>
                <div className='desktop-main-section'></div>
            </div>
        )
    }
}

export default TitleSection