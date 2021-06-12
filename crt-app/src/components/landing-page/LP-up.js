import React from 'react';

import '../../style/landing-page/LP-up.css'

class LendingPageUp extends React.Component {


    render() {
        return(
            <div className='LP-up' >
                <div className='LP-up-container'>
                    <h2>Build a team in minutes!</h2>
                    <p>Find a dirrect link to some of the best developers and designers out there!</p>
                    <form className='explore-input-container'>
                        <input
                        type='text'
                        placeholder='View user profiles and select your provider.'
                        id='explore'
                        name='inputValue'
                        />
                        <label
                        htmlFor='explore' 
                        >Explore Now</label>
                    </form>
                </div>
                <div className='circle' />
            </div>
        )
    }
}

export default LendingPageUp;