import {ADD_ITEM_TO_ORDER,ADD_ITEM_TO_CHECKOUT} from "./action-types"

export const addItemToOrder = order => {
    return({
        type: ADD_ITEM_TO_ORDER,
        payload: order
    }
    )
}
export const addItemToCheckout = order => {
    return({
        type: ADD_ITEM_TO_CHECKOUT,
        payload: order
    }
    )
}


