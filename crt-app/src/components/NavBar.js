import React from "react";

import '../style/NavBar.css';

import TeamifyLogo from '../img/teamify.svg';
import openBurger from '../img/openBurger.svg';
import closeBurger from '../img/closeBurger.svg';

class NavBar extends React.Component {

    state = {
        burger: openBurger,
        bugregMenuClass: 'closed-burger-nav',

    }

    handleOnBurgerClick = () => {
        if (this.state.burger === openBurger) {
            this.setState({
                burger: closeBurger,
                bugregMenuClass: 'opened-burger-nav',
            })
        }

        if (this.state.burger === closeBurger) {
            this.setState({
                burger: openBurger,
                bugregMenuClass: 'closed-burger-nav',
            })
        }
        
    }
    
    render () {
        return (
                <header>
                    <div className="header-container">
                        <img className="teamify-img" src={TeamifyLogo} alt="Teamify-logo"/>
                        <nav className="nav">
                            <ul>
                                <li>Freelancers</li>
                                <li>About Us</li>
                                <li>Case-Study</li>
                                <li>Reviews</li>
                                <li>Newsletter</li>
                            </ul>
                        </nav>

                        <div  className='burger-menu'>
                            <img 
                            src={this.state.burger} 
                            alt='burger-menu' 
                            className='burger'
                            onClick={() => this.handleOnBurgerClick()} 
                            />

                            <nav className={this.state.bugregMenuClass}>
                                <ul>
                                    <li>Freelancers</li>
                                    <li>About Us</li>
                                    <li>Case-Study</li>
                                    <li>Reviews</li>
                                    <li>Newsletter</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                <hr/>
            </header>
        )
    }  
}

export default NavBar;