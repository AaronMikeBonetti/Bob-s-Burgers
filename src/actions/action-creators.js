import {ADD_ITEM_TO_ORDER,ADD_ITEM_TO_CART,
REMOVE_ITEM_FROM_CART} from "./action-types"

export const addItemToOrder = order => {
    return({
        type: ADD_ITEM_TO_ORDER,
        payload: order
    }
    )
}
export const addItemToCart = order => {
    return({
        type: ADD_ITEM_TO_CART,
        payload: order
    }
    )
}
export const removeItemFromCart = FilteredList => {
    return({
        type: REMOVE_ITEM_FROM_CART,
        payload: FilteredList
    }
    )
}


