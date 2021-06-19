import React from 'react';

import '../../style/ProfilePage/ProfilePageRepos.css'

class ProfilePageRepos extends React.Component {

    state = {
        reposBackground: 'active-tab',
        followersBackground: ''
    }

    onReposClick = () => {
        this.setState({
            reposBackground: 'active-tab',
            followersBackground: ''
        })
    }

    onFollowersClick = () => {
        this.setState({
            reposBackground: '',
            followersBackground: 'active-tab'
        })
    }

    render() {
        return(
            <div className='profile-page-repos' >
                <div className='profile-page-repos-container' >
                    <div className='profile-tabs' >
                        <div 
                        onClick={this.onReposClick} 
                        className={`${'tab'} ${this.state.reposBackground}`} 
                        >
                            Repositories (0)
                        </div>
                        <div  
                        onClick={this.onFollowersClick} 
                        className={`${'tab'} ${this.state.followersBackground}`} 
                        >
                            Followers (0)
                        </div>
                    </div>
                    <div className='profile-repos-followers' >
                        <div className='profile-repos' >

                        </div>

                        <div className='profile-followers' >

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfilePageRepos;