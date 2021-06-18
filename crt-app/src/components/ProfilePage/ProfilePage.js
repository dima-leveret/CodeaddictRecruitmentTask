import React from "react";

import { connect } from 'react-redux';
import { cleanUser } from '../../state/users';

import ProfilePageHeader from './ProfilePageHeader'

import '../../style/ProfilePage/ProfilePage.css'

class ProfilePage extends React.Component {


    render() {
        return (
            <div className='profile-page' >
                <ProfilePageHeader/>
            </div>
            
        )
    }
    
}

const mapStateToProps = (state) => ({
    user: state.users.user,
    users: state.users.data
   
})


const mapDispatchToProps = {
    cleanUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);