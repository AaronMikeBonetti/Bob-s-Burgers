import React, { Component }from "react"
import { connect } from "react-redux"
import AddOns from "./Add-Ons/AddOns"
import "./order.scss"
import {addItemToCart} from "../../actions/action-creators";
import { Link } from "react-router-dom"


class Order extends Component{
    constructor(){
        super()
        this.state= {
            
            addOns:[
            'Ketchup',
            'Mayo',
            'Mustard',
            'Pickels',
            'Onions',
            ],
            cookingInstructions:"",
            Ketchup:false,
            Mayo:false,
            Mustard:false,
            Pickels:false,
            Onions:false
            
            

        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
        
    }
    
    componentDidMount(){
        window.scrollTo(0,0)
    } 





handleChange(e){
    
    const {name,value,type,checked}= e.target
    
    type === "checkbox" ? this.setState(() => {
        return{   
        //I set the value of name to either false or the name so I could more easily parse the data sent to the store.       
        [name]: checked  ? name : null             
    }
    }):
    this.setState({        
        [name]: value,
        
    })
}





handleSubmit(){
    //Here I deconstructed state put the add ons into an Array and pushed the ones that were true to an a final array and sent that to the store.
    
    const {Ketchup,Mayo,Mustard,Pickels,Onions,cookingInstructions} = this.state
    const addOns = [Ketchup,Mayo,Mustard,Pickels,Onions]
    let filteredAddOns = []
    addOns.forEach(item=>{
        if(item!==false){
            return filteredAddOns.push(item)
        }
        else{
            return null
        }
    })
    

    const burgerInfo = [this.props.burger[0].name,this.props.burger[0].price,
this.props.burger[0].itemID]

    const updateCartIcon = this.props.CartNumber +1

    const completeOrder = [burgerInfo,cookingInstructions,updateCartIcon,...filteredAddOns,]
    
    this.props.addItemToCart(completeOrder)
   
}
    
    
render(){
    
    const addOns= this.state.addOns.map(addOn=> 
         <AddOns className="add-ons" key={addOn} name={addOn} onChange={this.handleChange}/>    
)

const burgerName= this.props.burger[0].name

    return(
    <div>
       <div className="order-container">
           <h1 className="order-header">{burgerName}</h1>
           <form className="order-form"onChange=                {this.handleChange}>
                <h2>Add Ons</h2>
                {addOns}
                <h2 className="cooking-instructions">Cooking Instructions</h2>
                <textarea type="textarea" name="cookingInstructions" value={this.state.cookingInstructions} onChange={this.handleChange}/>
                <div className="button-container">
                <Link to="/Cart"><button onClick={this.handleSubmit}>Add To Cart</button></Link>
                <Link to="/menu"><button >Cancel</button></Link>
                </div>
           </form>     
       </div>
    </div>
)
}
}


const mapStateToProps= state =>{
    return{
    burger: state.order,
    CartNumber: state.header.itemsInCart
   
    }
}
const mapDispatchToProps= dispatch =>{
    return{
        addItemToCart: (order) => dispatch(addItemToCart(order)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Order)


