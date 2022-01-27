import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import "./Carts.scss";
import CartContext from './CartsAPI/CartContext';

function Cart() {
    return (
        <div className='Cart'>
            <Helmet>
                <title>
                    Keranjang || AAI Store
                </title>
            </Helmet>
            <Isi />
        </div>
    )
}

function Isi() {
    const { cartItems, clearCart } = useContext(CartContext);

    const emptyCart = () => {
        return (
            <div className='cart-empty'>
                <h4>Keranjangnya Kosong</h4>
            </div>
        )
    }

    return (
        <div className='container Isi'>
            <div className='Menu'>
                <div className='side-carts'>
                    <div className='Title'>
                        <h3>Carts</h3>
                    </div>
                    <div className='isi-carts'>
                        {cartItems.length === 0 ? emptyCart() : (
                            <table>
                                <tbody>
                                    {cartItems.map((item) => {
                                        return (
                                            <tr key={item.id}>
                                                <td>
                                                    <div className='img-cart'>
                                                        <img src={item.products_photo} alt='barang' />
                                                    </div>
                                                </td>
                                                <td>{item.brand}</td>
                                                <td>{item.nm_barang}</td>
                                                <td>{item.harga}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
                <div className='results-carts px-4 py-4'>
                    <div className='isi'>
                        <div className='title'>
                            <h2>Total Belanja</h2>
                        </div>
                        <div className='total-harga'>
                            <p>Rp. {cartItems.reduce((amount, item) => cartItems.length * item.harga, 0)}</p>
                        </div>
                        {cartItems.length !== 0 && (
                            <Link to="/checkout" className='btn_confirm'>
                                Konfirmasi Pembelian
                            </Link>
                        )}
                        {cartItems.length > 0 && (
                            <button onClick={() => clearCart()} className='btn_clear'>
                                Batalkan Belanjanya
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
