import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import CartContext from '../Carts/CartsAPI/CartContext';
import "./Checkout.scss";
function Checkout() {
    const { cartItems } = useContext(CartContext);

  return (
      <div className='Checkout'>
          <Helmet>
              <title>
                  Checkout || AAI Store
              </title>
          </Helmet>
          <div class="container mt-5 px-5">
            <div class="mb-4 Title">
                <h2>Konfirmasi Pemesanan dan Pembayaran</h2> <span>Silahkan Lakukan Pengisian Form Berikut dan Lakukan Pembayaran</span>
            </div>
            <div class="row Isi">
                <div class="col-md-8">
                    <div class="card p-3 Card">
                        <h6 class="text-uppercase">Detail Pembayaran</h6>
                        <div class="inputbox mt-3"> <input type="text"  class="form-control" required="required"/> <span>Nama Di Kartu</span> </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="inputbox mt-3 mr-2"> <input type="text" class="form-control" required="required"/> <i class="fa fa-credit-card"></i> <span>Nomor Kartu</span> </div>
                            </div>
                            <div class="col-md-6">
                                <div class="d-flex flex-row">
                                    <div class="inputbox mt-3 mr-2"> <input type="text" class="form-control" required="required"/> <span>Expiry</span> </div>
                                    <div class="inputbox mt-3 mr-2"> <input type="text" class="form-control" required="required"/> <span>CVV</span> </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-4 mb-4">
                            <h6 class="text-uppercase">ALAMAT</h6>
                            <div class="row mt-3">
                                <div class="col-md-6">
                                    <div class="inputbox mt-3 mr-2"> <input type="text" class="form-control" required="required"/> <span>Alamat Jalan</span> </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="inputbox mt-3 mr-2"> <input type="text" name="kota" class="form-control" required="required"/> <span>Kota</span> </div>
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-6">
                                    <div class="inputbox mt-3 mr-2"> <input type="text" name="provinsi" class="form-control" required="required"/> <span>Provinsi</span> </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="inputbox mt-3 mr-2"> <input type="text" name="kodepos" class="form-control" required="required"/> <span>Kode Pos</span> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-4 mb-4 d-flex justify-content-between"> 
                    <Link to="/carts">Kembali Ke Keranjang</Link> 
                    <Link to="/success"class="btn btn-success px-3 Buy">Bayar</Link> </div>
                </div>
                <div class="col-md-4 Box-Price">
                    <div class="card card-blue p-3 text-white mb-3 Results-Card"> 
                        <span>Hasil Belanjaan Anda : </span>
                        <div className='List-Item'>
                            {cartItems.map((item) => {
                                return (
                                    <div className='Card-Products' key={item.id}>
                                        <div className='place-img'>
                                            <img src={item.products_photo} alt="gambar"/>    
                                        </div>
                                        <div className='name-brand'>
                                            <h3>{item.brand}</h3>
                                        </div>
                                        <div className='name-product'>
                                            <h3>{item.nm_barang}</h3>
                                        </div>
                                        <div className='name-harga'>
                                            <h3>Rp. {item.harga}</h3>
                                        </div>
                                    </div>
                                )
                            })}
                        </div> 
                    </div>
                    <div class="card card-blue p-3 text-white mb-3 Price-Total"> <span>Anda Harus Membayar Sebesar</span>
                        <div class="d-flex flex-row align-items-end mb-3">
                            <h1 class="mb-0 yellow">Rp. {cartItems.reduce((amount, item) => cartItems.length * item.harga, 0)}</h1>
                        </div> 
                        <span>Silahkan Membayar Sesuai Dengan Yang Di Tentukan</span> 
                    </div>
                </div>
            </div>
        </div>
      </div>
  )
}

export default Checkout;
