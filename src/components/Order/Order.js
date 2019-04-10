import React, { Component }from "react"
import { connect } from "react-redux"
import AddOns from "./Add-Ons/AddOns"
import "./order.scss"
import {addItemToCheckout} from "../../actions/action-creators";
import { Link } from "react-router-dom"
import {store} from "../../App"

class Order extends Component{
    constructor(){
        super()
        this.state= {
            
            addOns:[
            {name:'Ketchup',checked: false},
            {name:'Mayo',checked: false},
            {name:'Mustard',checked: false},
            {name:'Pickels',checked: false},
            {name:'Onions',checked: false},
            ],
            cookingInstructions:"",
            order:[]
            

        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

handleChange(e){
    const {name,value,type}= e.target
    type === "checkbox" ? this.setState( prevState => {
        return{
            order:[...prevState.order,{
        [name]: name
        }]
    }
    }):
    this.setState({
            
        [name]: value
    })
}

handleSubmit(){  
    this.props.addItemToCheckout(this.state)
    store.subscribe(()=> console.log("store", store.getState()))
}
    
    
render(){
    console.log(this.state.order)
    const addOns= this.state.addOns.map(addOn=>   
    <AddOns className="add-ons" key={addOn.name} name={addOn.name} onChange={this.handleChange}/>    
)

const burgerName= this.props.burger[0].name

    return(
    <div>
       <div className="order-container">
           <h1 className="order-header">The {burgerName}</h1>
           <form className="order-form"onChange=                {this.handleChange}>
                <h2>Add Ons</h2>
                {addOns}
                <h2 className="cooking-instructions">Cooking Instructions</h2>
                <textarea type="textarea" name="cookingInstructions" value={this.state.order.cookingInstructions} onChange={this.handleChange}/>
                <div className="button-container">
                <Link to="/checkout"><button onClick={this.handleSubmit}>Add To Checkout</button></Link>
                <Link to="/menu"><button>Cancel</button></Link>
                </div>
           </form>     
       </div>
    </div>
)
}
}


const mapStateToProps= state =>{
    return{
    burger: state.order
   
    }
}
const mapDispatchToProps= dispatch =>{
    return{
        addItemToCheckout: (order) => dispatch(addItemToCheckout(order)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Order)