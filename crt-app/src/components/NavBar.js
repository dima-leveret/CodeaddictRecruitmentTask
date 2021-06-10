import React from "react";
import '../style/NavBar.css';
import TeamifyLogo from '../img/teamify.svg'

class NavBar extends React.Component {

    
    render () {
        return (
            <div className="Landing-Page">
                <div className="Background">
                    <header>
                        <div className="header-container">
                            <img className="Teamify" src={TeamifyLogo} alt="Teamify-logo"/>
                            <nav className="nav">
                                <ul>
                                    <li>Freelancers</li>
                                    <li>About Us</li>
                                    <li>Case-Study</li>
                                    <li>Reviews</li>
                                    <li>Newsletter</li>
                                </ul>
                            </nav>
                        </div>
                        <hr/>
                    </header>
                </div>
            </div>
        )
    }  
}

export default NavBar;