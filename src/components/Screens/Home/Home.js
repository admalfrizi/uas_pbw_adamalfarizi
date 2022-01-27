import React from 'react';
import data from '../../Data/data';
import { SliderData } from '../../Data/SliderData';
import {CategoriesData} from '../../Data/CategoriesData';
import "./Home.scss";
import Slider from './SliderHome';
import { Helmet } from "react-helmet";

function Home() {
    return (
        <div className='Home'>
            <Helmet>
                <title>Home || AAI - Store</title>
            </Helmet>
            <Banner />
            <Categories />
            <NewArrivals />
            <Benefits />
        </div>
    )
}

function Banner() {
    return (
        <div className="BannerHome">
            <div className="container Isi">
                <Slider slides={SliderData} />
            </div>
        </div>
    )
}

function Categories() {
    return (
        <div className='Categories'>
            <div className='container Isi'>
                <div className='CategoriesTitle'>
                    <h1>Kategori Produk</h1>
                </div>
                <div className='container CategoriesBanner'>
                    <div className='categories'>
                        {CategoriesData.map((kategori, index) => (
                            <div className='card-categories'>
                               <div className='widget-card mx-5'>
                                    <div className='img-categories'>
                                        <img src={kategori.image} alt='icons'/>
                                    </div>
                                    <div className='title-categories'>
                                        <h2>{kategori.title}</h2>
                                    </div>
                               </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

function NewArrivals() {
    return (
        <div className="NewArrivals">
            <div className="Isi">
                <div className="container NewArrivalsTitle mt-auto">
                    <h1>New Arrivals</h1>
                    <div className='line-title'></div>
                </div>
                <div className="container BannerProduct">
                    <div className='product'>
                        {data.productItems.map((item) => (
                            <div className='card-products px-3'>
                                <div className='img-products'>
                                    <img src={item.image} alt='img' />
                                </div>
                                <div className='details-name'>
                                    <div className='brand'>{item.brand}</div>
                                    <div className='name'>{item.name}</div>
                                </div>
                                <div className='price'>
                                    <h2 className='Rp-tag'>Rp. </h2>
                                    <h2 className='Rp-values'>{item.price_show}</h2>
                                </div>
                                <button className='details px-3 py-2'>Details
                                    <img src='assets/arrow_right.svg' alt='arrow' />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

function Benefits() {
    return (
        <div className='Benefits'>
            <div className="Isi pb-5">
                <div className='Title'>
                    <div className='line-title' />
                    <h2 className='benefits-title'>Benefits</h2>
                    <div className='line-title' />
                </div>
                <div className='BannerBenefits'>
                    <div className='container BannerBenefitsIsi'>
                        <div className='cards'>
                            <div className='icons'>
                                <img src='assets/benefits_1.svg' alt='bsaket'></img>
                            </div>
                            <h1>100% Original</h1>
                            <p>Belanja di tempat kami, dengan barang 100% original dan dapatkan kualitas yang terbaik di tempat kami</p>
                        </div>
                        <div className='cards'>
                            <div className='icons'>
                                <img src='assets/benefits_2.svg' alt='bsaket'></img>
                            </div>
                            <h1>Cepat dan Aman</h1>
                            <p>Kami memastikan barang yang anda beli selalu di kirim dengan aman dan cepat sehingga terhindar dari virus kekecewaan</p>
                        </div>
                        <div className='cards'>
                            <div className='icons'>
                                <img src='assets/benefits_3.svg' alt='bsaket'></img>
                            </div>
                            <h1>Dapat Diretur</h1>
                            <p>Barang yang anda beli bermasalah ? , silahkan retur ke kami maksimal 2 x 24 Jam dari waktu penerimaan barang</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;