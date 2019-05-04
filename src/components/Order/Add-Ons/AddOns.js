import React from "react"

function AddOns(props){
    return(
        <div className="add-ons">
                <h1>{props.name}</h1>
                <label><input className="add-on-checkbox" type="checkbox"
                name={props.name}
                onChange={props.handleChange}
                ></input><span></span></label>
        </div>
    )
}

export default AddOns