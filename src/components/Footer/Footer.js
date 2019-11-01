import React, { Component } from 'react'
import './footer.scss'

class Footer extends Component{
render(){
    return(
        <div className='footer-container'>
        <ul className='social-media-container'>
        <li><a href='https://www.facebook.com/BobsBurgers/'><i className='fab fa-facebook'></i></a></li>
        <li><a href='https://twitter.com/BobsBurgersFOX?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'><i className='fab fa-twitter-square'></i></a></li>
        <li><a href='https://www.instagram.com/bobsburgersfox/?hl=en'><i className='fab fa-instagram'></i></a></li>
        <li><a href='https://www.youtube.com/user/ANIMATIONonFOX'><i className='fab fa-youtube'></i></a></li>
        </ul>
        
        <div className='sources-container'><h2>Photos and Content by: <br/><a href='https://www.fox.com/bobs-burgers/'>Fox Broadcasting Company</a></h2>
        <h2>Website by: Aaron Bonetti</h2></div>
        
        </div>
    )
}
}

export default Footer