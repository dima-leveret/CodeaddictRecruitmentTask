/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { connect } from 'react-redux';
import { setDarkBlueColor } from '../../state/navColor';

import profileAvatarPlaceholder from "../../img/profile-avatar-placeholder.png"
import followingIcon from "../../img/following-icon.svg"
import followersIcon from "../../img/followers-icon.svg"

import "../../style/ProfilePage/ProfilePageHeader.css";

class ProfilePageHeader extends React.Component {

    state = {
        subscriptions: [],
        followers: [],
    }

    fetchSunscriptions = () => {
        if (this.props.user) {
            fetch(`https://api.github.com/users/${this.props.user.login}/subscriptions`)
            .then(response => response.json())
            .then(data => {
                const formattedData = Object.keys(data)
                    .map(key => ({
                            id: key,
                            ...data[key]
                        })
                    );

                this.setState({
                    subscriptions: formattedData
                })
                console.log('subscriptions:', this.state.subscriptions);
            })
        } else {
            console.log('There is no user subscriptions');
        }
        
    }

    fetchFollowers = () => {
        if (this.props.user) {
            fetch(`https://api.github.com/users/${this.props.user.login}/followers`)
            .then(response => response.json())
            .then(data => {
                const formattedData = Object.keys(data)
                    .map(key => ({
                            id: key,
                            ...data[key]
                        })
                    );

                this.setState({
                    followers: formattedData
                })
                console.log('followers:', this.state.followers);
            })
        } else {
            console.log('There is no user followers');
        }
        
    }

    componentDidMount() {
        this.fetchSunscriptions();
        this.fetchFollowers();
        this.props.setDarkBlueColor()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.user !== this.props.user) {
            this.fetchSunscriptions();
            this.fetchFollowers();
        }
    }

    render() {
        return (
            <div className='profile-page-header' >
                {
                    this.props.user
                    ?
                    <div className='profile-page-heiader-container' >
                        <div className='profile-avatar-container' >
                            <img 
                            className='profile-avatar' 
                            src={this.props.user.avatar_url} 
                            alt='profile-avatar-placeholder' 
                            /> 
                        </div>
                        <div className='profile-info-container' >
                            <div className='profile-info' >
                                <p className='profile-name' >James Beard</p>
                                <p className='profile-nickname' > {this.props.user.login} </p>
                                <div className='profile-follow' >
                                    <div className='profile-following-ers' >
                                        <img src={followingIcon} alt='profile-following-icon' />
                                        <p> Following ({this.state.subscriptions.length}) </p>
                                    </div>
                                    <div className='profile-following-ers' >
                                        <img src={followersIcon} alt='profile-followers-icon' />
                                        <p> Followers ({this.state.followers.length}) </p>
                                    </div>
                                </div>
                            </div> 
                                <a  
                                className='btn-to-github' 
                                href={this.props.user.html_url} target='_blank' 
                                rel="no noreferrer" >
                                    <p>View on GitHub</p>
                                </a>
                        </div>
                    </div>
                    :
                    <div className='profile-page-heiader-container' >
                        <div className='profile-avatar-container' >
                            <img 
                                className='profile-avatar' 
                                src={profileAvatarPlaceholder} 
                                alt='profile-avatar-placeholder' 
                            />
                        </div>
                        <div className='profile-info-container' >
                            <div className='profile-info' >
                                <p className='profile-name' >James Beard</p>
                                <p className='profile-nickname' >Nickname</p>
                                <div className='profile-follow' >
                                    <div className='profile-following-ers' >
                                        <img src={followingIcon} alt='profile-following-icon' />
                                        <p> Following (0) </p>
                                    </div>
                                    <div className='profile-following-ers' >
                                        <img src={followersIcon} alt='profile-followers-icon' />
                                        <p> Followers (0) </p>
                                    </div>
                                </div>
                            </div> 
                            
                            <a className='btn-to-github' href='#' >
                                <p>No GitHub link</p> 
                            </a>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.users.user,
   
})


const mapDispatchToProps = {
    setDarkBlueColor,
}


export default connect(mapStateToProps, mapDispatchToProps)(ProfilePageHeader);