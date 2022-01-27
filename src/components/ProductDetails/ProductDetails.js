import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./ProductDetails.scss";
import CartContext from "./../Carts/CartsAPI/CartContext";
import { Helmet } from 'react-helmet';

function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        const getData = async () => {
            axios.get(`https://aaistore.000webhostapp.com/apiproduk.php?id=${id}`)
                .then(response => {
                    setProduct(response.data[0])
                    setLoading(false)
                }
            )
        }

        getData()
    }, [id])

    console.log(product);

    const Loading = () => {
        return (
            <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    const Details = () => {
        return (
            <div className='container Isi' key={product.id}>
                <div className='image'>
                    <img src={product.products_photo} alt="barang" />
                </div>
                <div className='info-details'>
                    <h3>{product.brand}</h3>
                    <h1>{product.nm_barang}</h1>
                    <h2>Rp. {product.harga}</h2>
                    <button onClick={() => addToCart(product)} className='btn'>
                        Add To Cart
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className='Details'>
            <Helmet>
                <title>
                    Produk Details || AAI Store
                </title>
            </Helmet>
            {loading ? <Loading /> : <Details />}
        </div>
    );

}

export default ProductDetails;
