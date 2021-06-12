import React from "react";

import "../../style/subscribe-footer/Footer.css";

import twitterLogo from "../../img/twitter.svg"

function Footer() {
    return (
        <footer>
            <div className='footer-container'>
                <p className='teamify-cr'>© Teamify</p>
                <p className='copyrights'>Copyrights @ Teamify, All rights reserved</p>
                <a href='https://twitter.com/' target='_blank' rel="noreferrer" >
                    <img
                    className='twitter-logo' 
                    src={twitterLogo} 
                    alt='twitter-logo' 
                    />
                </a>
            </div>
        </footer>
        
    )
}

export default Footer;