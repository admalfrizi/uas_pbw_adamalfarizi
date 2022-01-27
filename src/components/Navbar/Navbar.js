/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useContext} from 'react';
import { NavLink, Link } from "react-router-dom";
import CartContext from '../Carts/CartsAPI/CartContext';
import "./Navbar.scss";
import TopNavMenu from './TopNavMenu/TopNavMenu';

function Navbar() {
    const { cartItems } = useContext(CartContext);

    return (
        <nav className='menu'>
            <TopNavMenu />
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container d-flex justify-content-between ">
                    <div className='icon-brand'>
                        <a>
                            <img src='assets/icon_aai_store.svg' alt='icon' />
                        </a>
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 w-auto p-2 nav-menu">
                            <li class="nav-item mx-2">
                                <NavLink to="/" className="nav-link" aria-current="page" activeClassname="active">
                                    <a>Home</a>
                                </NavLink>
                            </li>
                            <li class="nav-item mx-2">
                                <NavLink to="/products" className="nav-link" activeClassname="active">
                                    <a>Products</a>
                                </NavLink>
                            </li>
                            <li class="nav-item mx-2">
                                <NavLink to="/abouts" className="nav-link" activeClassname="active">
                                    <a>Abouts</a>
                                </NavLink>
                            </li>
                            <li class="nav-item me-auto cart-nav">
                                <Link to="/carts" className="">
                                    <img src='assets/cart_icon.svg' alt='cart' />
                                </Link>
                                <div className='totalitems'>
                                    <p>{cartItems.length}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </nav>
    );
}

export default Navbar;