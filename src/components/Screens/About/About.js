import React from "react";
import { Helmet } from "react-helmet";
import "./About.scss";

function About() {
    return (
        <div className="About">
            <SiapaKami />
            <ContactLoc />
        </div>
    )
}

function SiapaKami() {
    return (
        <div className="SiapaKami">
            <div className="container Isi">
                <div className="container Title">
                    <h1>Siapa Kami ?</h1>
                    <div className="line-title"/>
                </div>
                <div className="container Content">
                    <p>
                        aaistore adalah toko online teknologi yang menyediakan barang - barang elektronik mulai dari laptop , hp dan 
                        barang - barang lainnya yang berhubungan dengan IT. Silahkan hubungi kami jika anda ingin memesan komputer server
                        untuk kebutuhan bisnis.
                    </p>
                </div>
            </div>
        </div>
    )
}

function ContactLoc() {
    return (
        <div className="ContactLog">
            <Helmet>
                <title>
                    Tentang Kami || AAI Store
                </title>
            </Helmet>
            <div className="container Isi">
                <div className="Title">
                    <h1>Kontak Dan Lokasi Kami</h1>
                    <div className="line-title"/>
                </div>
                <div className="Content">
                    <div className="loc-name">
                        <img src="assets/loc_icons.svg" alt="loc"/>
                        <p>JL. Mangga II No. 20 Semarang Raya</p>
                    </div>
                    <div className="email-name">
                        <img src="assets/email_icon.svg" alt="email"/>
                        <p>aaistore@gmail.com</p>
                    </div>
                    <div className="email-name">
                        <img src="assets/contact_phone.svg" alt="email"/>
                        <p>021-7892-1452</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About