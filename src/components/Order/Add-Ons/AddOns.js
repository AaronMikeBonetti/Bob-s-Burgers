import React from "react"
import { connect } from "react-redux"

function AddOns(props){

// let oldAddOnsTest= ["Ketchup","Onions","kats"]

// let handleEdit = (name) =>{

// }

        
    
    return(
        <div className="add-ons">
                <h1>{props.name}</h1>
                <label><input className="add-on-checkbox" type="checkbox"
                name={props.name} 
                onChange={props.handleChange}
                defaultChecked={props.defaultChecked}
                ></input><span></span></label>
        </div>
    )
}

const mapStateToProps= state =>{
    return{
    oldAddOns: state.order[1].editedItemAddOns
    }
}

export default connect(mapStateToProps)(AddOns)