import React from "react";
import { connect } from 'react-redux';
import { getUser } from '../../state/users';

import avatarPlaceholder from "../../img/avatar-placeholder.png"

import "../../style/ListOfUsers/UserCard.css"

// ({ avatar, nickname, user })
class UserCard extends React.Component {

    render() {
        return(
            <div onClick={() => this.props.getUser(this.props.oneUser)} className='user-card' >
                <div className='user-card-container' >
                    <div className='user-avatar-container' >
                        {
                            this.props.avatar
                            ?
                            <img className='user-avatar' src={this.props.avatar} alt="user.avatar_url" />
                            :
                            <img className='user-avatar' src={avatarPlaceholder} alt="user.avatar_url" />
                        }
                        
                    </div>
                    <p className='user-name' >James Beard</p>
                    {
                        this.props.nickname
                        ?
                        <p className='user-nickname' > {this.props.nickname} </p>
                        :
                        <p className='user-nickname' > nickname </p>
                    }
                </div>
            </div>
        )
    }
    
}

const mapStateToProps = (state) => ({
    user: state.users.user
})


const mapDispatchToProps = {
    getUser
}

export default connect(mapStateToProps, mapDispatchToProps)(UserCard);