import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import "./Product.scss";
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function Product() {
    return (
        <div className='Products'>
            <Helmet>
                <title>Produk || AAI - Store</title>
            </Helmet>
            <Isi />
        </div>
    )
}

function Isi() {
    const [searchVal, setSearchTerm] = useState("");
    const [productsFiltered, setFilteredProduct] = useState([]);
    const [dataVal, setData] = useState([]);
    const [loading, setLoading] = useState(true);

  

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get("https://aaistore.000webhostapp.com/apiproduk.php");
            setData(request.data)
            setLoading(false)
        }

        fetchData()
    }, []);

    useEffect(() => {
        setFilteredProduct(
            dataVal.filter((products) =>
                products.nm_barang.toLowerCase().includes(searchVal.toLowerCase())
            )
        )
    }, [searchVal, dataVal]);

    console.log(dataVal)

    const Loading = () => {
        return (
            <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    const ShowProducts = () => {
        return (
            <><div className='content-isi'>
                <div className='product'>
                    {productsFiltered.map((products, index) => {
                        return (
                            <div className='card-products px-3' key={index}>
                                <div className='img-products'>
                                    <img src={products.products_photo} alt='img' />
                                </div>
                                <div className='details-name'>
                                    <div className='brand'>{products.brand}</div>
                                    <div className='name'>{products.nm_barang}</div>
                                </div>
                                <div className='price'>
                                    <h2 className='Rp-tag'>Rp.</h2>
                                    <h2 className='Rp-values'>{products.harga}</h2>
                                </div>
                                <NavLink to={`/products/${products.id}`} className='buy px-3 py-2'>Details
                                    <img src='assets/arrow_right.svg' alt='arrow' />
                                </NavLink >
                            </div>
                        );
                    })
                    }
                </div>
            </div></>
        )
    }

    return (
        <div className='container Isi'>
            <div className='Title'>
                <h1>Semua Produk</h1>
                <div className='line-title' />
            </div>
            <div className='PanelProducts'>
                <div className='Search'>
                    <img src='assets/search_icons.svg' alt='search' />
                    <input type="search" placeholder="Cari Produk" onChange={(e) => {
                        setSearchTerm(e.target.value);
                    }} />
                </div>
                <div className='Dropdown-menu'>
                    <button className='dropmenu'>Pilih Brand
                        <img src='assets/arrow_bottom.svg' alt='icon' />
                    </button>
                    <div className='Isi-dropdown'>
                        <a href='a'>Lenovo</a>
                        <a href='a'>Asus</a>
                        <a href='a'>HP</a>
                        <a href='a'>Samsung</a>
                    </div>
                </div>
            </div>
            <div className='content-isi'>
                {loading ? <Loading /> : <ShowProducts />}
            </div>
        </div>
    )
}

export default Product
