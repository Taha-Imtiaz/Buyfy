import { ADD_ITEM_TO_CART } from "./cartConstants";
import { addItemToCartHelper } from "../../Utility/Utility";

var initialState = [];

var cartReducer = (state = initialState, action) => {
    var {type, payload} = action

    switch (type) {
       case ADD_ITEM_TO_CART:
           return addItemToCartHelper(state/*(cart arr) */,payload.item /* (item to add) */)
    
        default:
           return state
    }
}
export default cartReducer