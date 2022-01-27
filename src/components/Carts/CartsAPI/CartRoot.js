import React , { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import * as actionTypes from './State';

const CartRoot = ({ children }) => {
  const initalState = {
    cartItems: [],
  };

  const [state, dispatch] = useReducer(CartReducer, initalState);

  const addToCart = (item) => {
    dispatch({ type: actionTypes.ADD_TO_CART, payload: item });
  };

  const removeFromCart = (id) => {
    dispatch({ type: actionTypes.REMOVE_ITEM, payload: id });
  };

  const clearCart = () => {
    dispatch({ type: actionTypes.CLEAR_CART});
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartRoot;