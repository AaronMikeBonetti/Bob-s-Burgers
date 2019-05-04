import { ADD_ITEM_TO_ORDER, ADD_ITEM_TO_CART,
REMOVE_ITEM_FROM_CART, EDIT_ITEM_IN_ORDER, ADD_SUBTOTAL } from "../actions/action-types"
import { initialState } from "../App"


export const rootReducer = (state = initialState, action) => {
    
      switch(action.type){
        case ADD_ITEM_TO_ORDER: 
          return Object.assign({},state,{order:[
            {name: action.payload.name,
            price: action.payload.price,itemID: action.payload.itemID
          },{editedItemAddOns:[],
            editedItemCookingInstructions:""}
          ]})

        case ADD_ITEM_TO_CART: 
        return Object.assign({},state,{
          header:{itemsInCart: action.payload[2]},
          Cart:[...state.Cart,{
          itemInfo: action.payload[0],
          cookingInstructions: action.payload[1],
          addOns: action.payload.splice(3)}],
          order:[...state.order,{
              editedItemAddOns: action.payload.addOns,
              editedItemCookingInstructions:action.payload.cookingInstructions
          }]
        })

        case REMOVE_ITEM_FROM_CART: 
        return Object.assign({},state,{
          header:{itemsInCart: state.header.itemsInCart -1},
          Cart: action.payload
        })

        case EDIT_ITEM_IN_ORDER: 
        return Object.assign({},state,{
          order:[
            {name: action.payload.item,
            price: action.payload.price,itemID: action.payload.itemID},{
            editedItemAddOns: action.payload.addOns,
            editedItemCookingInstructions:action.payload.cookingInstructions}
          ]
        })

        case ADD_SUBTOTAL: 
        return Object.assign({},state,{
          Subtotal: action.payload
        })
    
        default: return{
         ...state
        }
      
      }
    }


