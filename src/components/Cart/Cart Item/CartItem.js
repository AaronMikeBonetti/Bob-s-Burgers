import React from "react"
import "./cart-item.scss"
import {Link} from "react-router-dom"


function CartItem(props){
    
    const endOfAddOnsList = props.addOns.length - 1
    console.log(endOfAddOnsList)
    let count = 0
     
        return (
            <div className="item">
                <div className="item-name">{props.item}</div>
                <div className="item-price">{`$${props.price}`}</div>
                <div className="item-addons"><span>Add-Ons: </span>
                {props.addOns.map(addOn=>{                  if(addOn===""){
                    return ""
                }
                    if(count === endOfAddOnsList ){
                        return ` ${addOn}`}
                    else{
                        count++
                    return ` ${addOn}, `              
                    }
                })
                }
                </div>
                <div className="item-cooking-instructions">
                    <span>Cooking Instructions: </span>
                    {props.cookingInstructions}
                </div>
                <div><h1>{props.itemNumber}</h1></div>
                <div className="item-buttons">
                <button onClick={() => props.handleRemove(props)}>Remove</button>
                <Link to="/order"><button onClick={() => props.handleEdit(props)}>Edit</button></Link> </div>
            </div>
        )
    
        }






export default CartItem