import React from "react";

import LendingPageUp from './LP-up';
import LandingPageContect from './LP-content';

import '../../style/landing-page/LP-main.css'

function LandingPageMain () {
    return(
        <div className='landing-page'>
            <LendingPageUp/>
            <LandingPageContect/>
        </div>
    )
}

export default LandingPageMain;