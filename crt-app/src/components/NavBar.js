import React from "react";
import { Link } from 'react-router-dom';

import '../style/NavBar.css';

import TeamifyLogo from '../img/teamify.svg';
import openBurger from '../img/openBurger.svg';
import closeBurger from '../img/closeBurger.svg';

class NavBar extends React.Component {

    state = {
        burger: openBurger,
        bugregMenuClass: 'closed-burger-nav',
        headerColor: 'header-green-color'
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

    changeHeaderColorToGreen = () => {
        this.setState({
            headerColor: 'header-green-color'
        })
        this.handleOnBurgerClick();
    }

    changeHeaderColorToGray = () => {
        this.setState({
            headerColor: 'header-gray-color'
        })
    }
    
    render () {
        return (
                <header className={this.state.headerColor} >
                    <div className="header-container">
                        <Link to='/' >
                            <img 
                                className="teamify-img" 
                                src={TeamifyLogo} 
                                alt="Teamify-logo"
                                onClick={this.changeHeaderColorToGreen}
                            />
                        </Link>

                        <nav className="nav">
                            <ul>
                                <Link to='/listOfUsers' style={{ textDecoration: 'none' }} >
                                    <li onClick={this.changeHeaderColorToGray} className='nav-link' >Freelancers</li>
                                </Link>
                                <li className='nav-link' >About Us</li>
                                <li className='nav-link' >Case-Study</li>
                                <li className='nav-link' >Reviews</li>
                                <li className='nav-link' >Newsletter</li>
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
                                    <Link to='/listOfUsers' style={{ textDecoration: 'none' }} >
                                        <li onClick={() => {this.changeHeaderColorToGray(); this.handleOnBurgerClick()}} className='nav-link' >Freelancers</li>
                                    </Link>
                                    <li onClick={() => this.handleOnBurgerClick()} className='nav-link' >About Us</li>
                                    <li onClick={() => this.handleOnBurgerClick()} className='nav-link' >Case-Study</li>
                                    <li onClick={() => this.handleOnBurgerClick()} className='nav-link' >Reviews</li>
                                    <li onClick={() => this.handleOnBurgerClick()} className='nav-link' >Newsletter</li>
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