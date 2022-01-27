import * as actionTypes from './State';

const CartReducer = (state, action) => {
    const product = action.payload;
    switch(action.type) {
        case actionTypes.ADD_TO_CART:
            return {
                ...state,
                cartItems: [
                    ...state.cartItems,
                    product
                ]
            }
        case actionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    (id) => id !== product
                )
            }

        case actionTypes.CLEAR_CART:
            return {
                ...state,
                cartItems: []
            }

        default:
            return state;
    }
}

export default CartReducer;