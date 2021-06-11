import React from "react";

import "../style/Subscribe-Footer.css"

import Subscribe from "./subscribe-footer/Subscribe";
import Footer from "./subscribe-footer/Footer";

function SubscribeFooter() {
    return(
        <div className='subscribe-footer' >
            <Subscribe/>
            <Footer/>
        </div>
    )
}

export default SubscribeFooter;