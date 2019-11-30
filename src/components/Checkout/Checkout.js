import React, {Component} from "react"
import {connect} from "react-redux"
import {Link} from "react-router-dom"
import "./checkout.scss"
import CheckoutPopUp from "./Checkout Pop-Up/CheckoutPopUp"


class Checkout extends Component{
    constructor(){
        super()
        this.state={
            firstName: "",
            lastName:"",
            billingAddress:"",
            creditCardNumber:"",
            cvv:"",
            expirationMonth:"",
            expirationYear:"",
            formErrors:{
                firstName: "",
            lastName:"",
            billingAddress:"",
            creditCardNumber:"",
            cvv:"",
            expirationMonth:"",
            expirationYear:""
            },
            formValid:false

        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.formValid = this.formValid.bind(this)

    }

    componentDidMount(){
        window.scroll(0,0)
    }
    

    handleChange(e){
        const {name,value} = e.target
        this.setState({
            [name]: value
        })

        let formErrors = this.state.formErrors
        let nameRegex = RegExp(/^[a-z ,.'-]+$/i)
        let creditCardRegex = RegExp("^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35/d{3})/d{11})$")
        let cvvRegex = RegExp("^[0-9]{3,4}$")
        
        switch(name){
            
            case "firstName": 
            formErrors.firstName = value.length >= 3 && nameRegex.test(value)  ? "" : "First Name Invalid"
            break
        
            case "lastName": 
            formErrors.lastName = value.length >= 3 && nameRegex.test(value)  ? "" : "Last Name Invalid"
            break

            case "billingAddress": 
            formErrors.billingAddress = value.length >= 3 ? "" : "Billing Address Invalid"
            break
            
            case "creditCardNumber": 
            formErrors.creditCardNumber =
            creditCardRegex.test(value)  && value.length > 0 ? "" : "Card Number Invalid"
            break
            
            case "cvv": 
            formErrors.cvv = 
            cvvRegex.test(value) ? "" : "Cvv Invalid"
            break
            
            case "expirationMonth": 
            formErrors.expirationMonth = value.length === 6 ? "Month Not Selected" : ""
            break
            
            case "expirationYear": 
            formErrors.expirationYear = value.length === 6 && value.length > 0 ? "Year Not Selected" : ""
            break
        
        default: 
        break

        
    
        }

    this.setState({
        formErrors, [name]: value}
    )
}     
formValid(errors, ...rest){
    let valid = true
    
    Object.values(errors).forEach(val=> val.length >0 && (valid= false))

    Object.values(rest).forEach(val=>{
        val && (valid = false)
    
    })
    
    return valid
}  
    

    handleSubmit(e){
        e.preventDefault()
        if(this.formValid(this.state.formErrors)){
            this.setState({
                formValid: true
            })
        }
        else{
            window.scrollTo(0,0)
        }
    }

    render(){

        
        
        const { formErrors } = this.state

        function errorMessage(errorType){
        
            return errorType.length > 0 && (<span className="error-message">{errorType}</span>)
        }

        let tax = (this.props.subtotal * 0.07).toFixed(2);
        let calculatedTax = (0.07 * this.props.subtotal)
        let total = (calculatedTax + Number(this.props.subtotal)).toFixed(2)
        
        
        
        let currentYear = new Date().getFullYear()
        let years = ["Select"]
        let months =  ["Select","Jan","Feb","March","April","May","June","Jul","Aug","Sep","Oct","Nov","Dec"] 

        for(let i=0; i<10;i++){
                years.push(currentYear++)
            }
        let mappedYears = years.map(year=>{
                return  <option key={year} value={year} name={this.state.expirationYear}>{year}</option>
                })
        
        let mappedMonths = 
            months.map(month=>{
                return <option key={month}value={month} name={this.state.expirationMonth}>{month}</option>
                })
            
        let items = this.props.items

        return(
            <div className="checkout-page-container">
            <div 
            className="checkout-container">  
                <h1 className="checkout-header">Checkout</h1>
            <div className="checkout-form-container">
            
            <form onSubmit={this.handleSubmit}>
                
                <label>First Name
                    <input name="firstName" value={this.state.firstName} onChange={this.handleChange} className="first-name" type="text" required>
                    </input>
                    {errorMessage(formErrors.firstName)}
                </label>
                
                <label>Last Name
                    <input name="lastName" value={this.state.lastName} onChange={this.handleChange} className="last-name"type="text" required>
                </input>
                    {errorMessage(formErrors.lastName)}</label>
                
                <label>Billing Address
                    <input name="billingAddress" value={this.state.billingAddress} onChange={this.handleChange} className="billing-address"type="text" required>
                    </input>
                    {errorMessage(formErrors.billingAddress)}
                </label>
                
                <label>Credit Card Number
                    <input name="creditCardNumber" value={this.state.creditCardNumber} onChange={this.handleChange} className="card-number"type="text" required>
                    </input>
                    {errorMessage(formErrors.creditCardNumber)}
                </label>
                
                <label>CVV
                    <input name="cvv" value={this.state.cvv} onChange={this.handleChange} className="card-cvv" type="text" required>
                    </input>
                    {errorMessage(formErrors.cvv)}
                </label>
                
                <label>Month 
                    <select value={this.state.expirationMonth} name="expirationMonth" onChange={this.handleChange}className="card-expiration-date" required>

                    {mappedMonths}

                    </select>
                    {errorMessage(formErrors.expirationMonth)}
                </label> 
                <label>Year 
                    <select value={this.state.expirationYear} name="expirationYear" onChange={this.handleChange} className="card-expiration-date" required>

                    {mappedYears}
                    
                    </select>
                    {errorMessage(formErrors.expirationYear)}
                </label>
                
                <div className="order-total-container">
                    <div className="order-total-headers">
                        <h1>Order Total:</h1>
                        <h1 >Tax:</h1>
                        <h1>Total Due:</h1>
                    </div>
                    <div className="order-total-amounts">
                        <h1>{this.props.subtotal}</h1>
                        <h1>{tax}</h1>
                        <h1>{total}</h1>
                    </div>
                </div>
                <div className="checkout-buttons">
                <Link to="/cart"><button>Review<br/>Order
                </button></Link>
                <button>Submit<br/>Payment</button></div>
            </form>
            </div>
            </div>
            
            
            <CheckoutPopUp items={items} total={total} valid={this.state.formValid}/>
            </div>
            

        )
    }
}

const mapStateToProps= state =>{
    return{
    subtotal: state.Subtotal, 
    items: state.Cart     
    }
}

const mapDispatchToProps= dispatch =>{
    return{
        // removeItemFromCart: (CartItems) => dispatch(removeItemFromCart(CartItems)),
        // addItemToOrder: (item) => dispatch(addItemToOrder(item)),
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(Checkout)