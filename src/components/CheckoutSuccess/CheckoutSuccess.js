import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import "./CheckoutSuccess.scss";

function CheckoutSuccess() {
  return (
      <div className='Success'>
          <Helmet>
              <title>
                  Sukses || AAI Store
              </title>
          </Helmet>
          <Isi />
      </div>
  );
}

function Isi() {
    return (
        <div className='container Isi'>
            <div className='Tag'>
                <h2>
                    Sukses Barang Anda Sedang Di Kirimkan
                </h2>
            </div>
            <div className='BackToHome'>
                <Link to="/" className="btn_home">
                    Balik Ke Halaman Utama
                </Link>
            </div>
        </div>
    )
}

export default CheckoutSuccess;
