import React from "react"
import "./checkout-pop-up.scss"
import {Link} from "react-router-dom"

function CheckoutPopUp(props){


let mappedPropItems = 
    props.items.map(item=>{
        return (
        <li key={item.itemInfo[0]}>{item.itemInfo[0]}</li>
        )
    })


    return(
        <div className={props.valid?"pop-up-container": "pop-up-container hidden"}>
            <div className="pop-up">
                <h1>Thank You!</h1>
                <h3>Your Order :</h3>
                <ul>
                    {mappedPropItems}
                </ul>
                <div className="total-header">Total: {props.total}</div>
                <div className="pop-up-buttons">
                <Link to="/"><button>Home</button></Link>
                <Link to="/menu"><button>Menu</button></Link>
                </div>
               
            </div>
        </div>
    )
}

export default CheckoutPopUp