import React from "react";

import { connect } from 'react-redux';
import { cleanUser } from '../../state/users';

import ProfilePageHeader from './ProfilePageHeader';
import ProfilePageRepos from './ProfilePageRepos';

import '../../style/ProfilePage/ProfilePage.css';

class ProfilePage extends React.Component {

    componentWillUnmount() {
        this.props.cleanUser()
    }

    render() {
        return (
            <div className='profile-page' >
                <ProfilePageHeader/>
                <ProfilePageRepos/>
            </div>
            
        )
    }
    
}

const mapStateToProps = (state) => ({
    user: state.users.user,
})


const mapDispatchToProps = {
    cleanUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);