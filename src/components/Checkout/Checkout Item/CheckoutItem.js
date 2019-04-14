import React from "react"
import "./checkout-item.scss"


function CheckoutItem(props){
    
    const endOfAddOnsList = props.addOns.length - 1
    let count = 0
     
        return (
            <div className="item">
                <div className="item-name">{props.item}</div>
                <div className="item-price">{`$${props.price}`}</div>
                <div className="item-addons"><span>Add-Ons:</span>
                {props.addOns.map(addOn=>{
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
                    <span>Cooking Instuctions:</span>
                    {props.cookingInstructions===""? " none":props.cookingInstructions}
                </div>
                <div className="item-buttons">
                <button>Remove</button>
                <button>Edit</button></div>
            </div>
        )
    
        }






export default CheckoutItem