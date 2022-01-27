import React from "react";
import Home from '../Screens/Home/Home'
import { Route, Routes } from "react-router-dom";
import Product from "../Screens/Products/Products";
import About from "../Screens/About/About";
import Cart from "../Carts/Carts";
import ProductDetails from "../ProductDetails/ProductDetails";
import Checkout from "../Checkout/Checkout";
import CheckoutSuccess from "../CheckoutSuccess/CheckoutSuccess";

const ScreenRoute = () => {
    return (
        <Routes>
            <Route 
            path="/" 
            element={<Home/>}
            />
            <Route path="/products" element={<Product />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/abouts" element={<About />}/>
            <Route path="/carts" element={<Cart />}/>
            <Route path="/checkout" element={<Checkout />}/>
            <Route path="/success" element={<CheckoutSuccess />}/>
        </Routes>
    )
}

export default ScreenRoute;