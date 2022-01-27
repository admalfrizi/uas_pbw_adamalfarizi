import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SliderData } from '../../Data/SliderData';
import "./Home.scss";

function Slider({ slides }) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className='slider'>
            <img src='assets/prev_icon.svg' className='prev_btn' alt='prev' onClick={prevSlide}/>
            <img src='assets/next_icon.svg' className='next_btn' alt='next' onClick={nextSlide}/>
            {SliderData.map((slide, index) => {
                return (
                    <div className={index === current ? 'isi-slider active' : 'isi-slider'} key={index}>
                        {index === current && (
                            <div className='page'>
                                <div className="BannerTitle mt-auto">
                                    <h1>{slide.title}</h1>
                                    <p>{slide.subtitle}</p>
                                    <Link to="/products"className='CariProduk py-3 px-5'>Cari Produk</Link>
                                </div>
                                <div className="BannerImg">
                                    <img src={slide.image} alt="website" />
                                </div>
                            </div>
                        )}
                    </div>
                )
            })}
        </section>
    )
}

export default Slider