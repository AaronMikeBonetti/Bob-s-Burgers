import { ADD_ITEM_TO_ORDER, ADD_ITEM_TO_CHECKOUT } from "../actions/action-types"
import { intialState } from "../App"


export const rootReducer = (state = intialState, action) => {
    
      switch(action.type){
        case ADD_ITEM_TO_ORDER: 
          return Object.assign({},state,{order:[
            {name: action.payload.name,
            price: action.payload.price}
          ]})

        case ADD_ITEM_TO_CHECKOUT: 
          return { 
          ...state,
          checkout:[...state.checkout, {addOns: action.payload.order,
           cookingInstructions: action.payload.cookingInstructions}]
        }
    
        default: return{
         ...state
        }
      
      }
    }


