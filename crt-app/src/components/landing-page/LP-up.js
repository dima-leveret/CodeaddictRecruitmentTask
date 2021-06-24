import React from 'react';
import { connect } from 'react-redux';
import { setGreenColor } from '../../state/navColor';

import '../../style/landing-page/LP-up.css';
import stripedCircle from '../../img/header-striped-circle.svg';
import darkDircle from '../../img/dark-circle.svg';

class LendingPageUp extends React.Component {

    componentDidMount() {
        this.props.setGreenColor()
    }

    render() {
        return(
            <div className='LP-up' >
                <div className='LP-up-container'>
                    <h2>Build a team in minutes!</h2>
                    <p>Find a dirrect link to some of the best developers and designers out there!</p>
                    <form className='explore-input-container'>
                        <input
                        autoComplete="off"
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
                <div  className='circles'>
                    <img src={stripedCircle} alt='striped-circle' className='striped-circle' />
                    <img  src={darkDircle}  alt='dark-dircle' className='dark-circle' />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})


const mapDispatchToProps = {
    setGreenColor,
}

export default connect(mapStateToProps, mapDispatchToProps)(LendingPageUp);