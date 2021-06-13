import React from 'react';

import '../../style/landing-page/LP-content.css';

import aboutUsImage from '../../img/about-us-image.png'

function LandingPageContect() {
    return (
        <div  className='LP-content' >
            <div className='about-us' >
                <div className='about-us-text' >
                    <p className='about-us-text-1' >O1. About Us</p>
                    <h3>All you need to know about us.</h3>
                    <p className='about-us-text-short-description' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquet orci, sit sagittis sed vel dictum lacus purus.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquet orci, sit sagittis sed vel dictum lacus purus. </p>
                </div>
                <div className='about-us-image-and-graf' >
                    <div className='about-us-graf' >
                        <div className='about-us-graf-info' >
                            <div className='about-us-graf-info-users' >
                                <h3>1200+</h3>
                                <p>Our users are all over the world</p>
                            </div>
                            <div className='about-us-graf-info-companies' >
                                <h3>600+</h3>
                                <p>Companies corporate with us</p>
                            </div>
                        </div>
                        
                    </div>
                    <img src={aboutUsImage} alt='aboutUsImage' className='about-us-image' />
                </div>
            </div>
        </div>
    )
}

export default LandingPageContect;