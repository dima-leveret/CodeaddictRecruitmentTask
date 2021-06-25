import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import '../style/NavBar.css';

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

    handleOnLogoClick = () => {
        if (this.state.burger === closeBurger) {
            this.setState({
                burger: openBurger,
                bugregMenuClass: 'closed-burger-nav',
            })
        }
    }

    
    render () {
        return (
                <header className={this.props.headerColor} >
                    <div className="header-container">
                        <Link to='/' >
                            <img 
                                className="teamify-img" 
                                src={this.props.teamifyLogo} 
                                alt="Teamify-logo"
                                onClick={this.handleOnLogoClick}
                            />
                        </Link>

                        <nav className="nav">
                            <ul>
                                <Link to='/listOfUsers' style={{ textDecoration: 'none'}} >
                                    <li onClick={this.changeHeaderColorToGray} className={`nav-link ${this.props.navLinkColor}`} >Freelancers</li>
                                </Link>
                                <li className={`nav-link ${this.props.navLinkColor}`} >About Us</li>
                                <li className={`nav-link ${this.props.navLinkColor}`} >Case-Study</li>
                                <li className={`nav-link ${this.props.navLinkColor}`} >Reviews</li>
                                <li className={`nav-link ${this.props.navLinkColor}`} >Newsletter</li>
                            </ul>
                        </nav>

                        <div  className='burger-menu'>
                            <img 
                            src={this.state.burger} 
                            alt='burger-menu' 
                            className='burger'
                            onClick={() => this.handleOnBurgerClick()} 
                            />

                            <nav className={`${this.state.bugregMenuClass} ${this.props.headerColor}`}>
                                <ul>
                                    <Link to='/listOfUsers' style={{ textDecoration: 'none' }} >
                                        <li onClick={() => this.handleOnBurgerClick()} className={`nav-link ${this.props.navLinkColor}`} >Freelancers</li>
                                    </Link>
                                    <li onClick={() => this.handleOnBurgerClick()} className={`nav-link ${this.props.navLinkColor}`} >About Us</li>
                                    <li onClick={() => this.handleOnBurgerClick()} className={`nav-link ${this.props.navLinkColor}`} >Case-Study</li>
                                    <li onClick={() => this.handleOnBurgerClick()} className={`nav-link ${this.props.navLinkColor}`} >Reviews</li>
                                    <li onClick={() => this.handleOnBurgerClick()} className={`nav-link ${this.props.navLinkColor}`} >Newsletter</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                <hr className={`hr ${this.props.hrColor}`} />
            </header>
        )
    }  
}

const mapStateToProps = (state) => ({
    teamifyLogo: state.navColor.teamifyLogo,
    headerColor: state.navColor.headerColor,
    navLinkColor: state.navColor.navLinksColor,
    hrColor: state.navColor.hrColor
})


const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);