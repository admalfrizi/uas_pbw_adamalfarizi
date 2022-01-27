import React from 'react';
import './TopNavMenu.scss';

function TopNavMenu() {
    return (
        <nav class="top-nav">
            <div class="container">
                <div className='notif'>
                    <p>Notifications</p>
                </div>
                <div className='wa_item'>
                    <div className='wa_icon'>
                        <img src='assets/wa_icons.svg' alt='wa'/>
                    </div>
                    <div className='wa_number'>
                        021-7892-1452
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default TopNavMenu