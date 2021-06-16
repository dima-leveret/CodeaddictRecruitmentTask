import React from "react";

import "../../style/ListOfUsers/UserCard.css"

function UserCard({ avatar, nickname }) {

    return(
        <div className='user-card-container' >
            <div className='user-card' >
                <div className='user-avatar-container' >
                    <img className='user-avatar' src={avatar} alt="user.avatar_url" />
                </div>
                <p className='user-name' >James Beard</p>
                <p className='user-nickname' > {nickname} </p>
            </div>
        </div>
    )
}

export default UserCard;