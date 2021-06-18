import React from "react";
import { connect } from 'react-redux';

import profileAvatarPlaceholder from "../../img/profile-avatar-placeholder.png"

import "../../style/ProfilePage/ProfilePageHeader.css"

class ProfilePageHeader extends React.Component {


    render() {
        return (
            <div className='profile-page-header' >
                <div className='profile-page-header-container' >
                    <div className='profile-avatar-container' >
                        {
                            this.props.user
                            ?
                            <img 
                            className='profile-avatar' 
                            src={this.props.user.avatar_url} 
                            alt='profile-avatar-placeholder' />
                            :
                            <img 
                            className='profile-avatar' 
                            src={profileAvatarPlaceholder} 
                            alt='profile-avatar-placeholder' />
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.users.user,
   
})


const mapDispatchToProps = {
}


export default connect(mapStateToProps, mapDispatchToProps)(ProfilePageHeader);