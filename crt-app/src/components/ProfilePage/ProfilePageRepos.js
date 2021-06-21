import React from 'react';
import { connect } from 'react-redux';
import { getUser, cleanUser, fetchUsers } from '../../state/users';
import { Link } from 'react-router-dom';


import '../../style/ProfilePage/ProfilePageRepos.css';

import repoOwnerAvatar from "../../img/avatar-placeholder.png";
import profileAvatarPlaceholder from "../../img/profile-avatar-placeholder.png"

class ProfilePageRepos extends React.Component {

    state = {
        reposBackground: 'active-tab',
        followersBackground: '',
        reposDisplay: 'profile-repos-active',
        followersDisplay: 'profile-followers-not-active',
        followers: [],
        repos: [],
    }

    onReposClick = () => {
        this.setState({
            reposBackground: 'active-tab',
            followersBackground: '',
            reposDisplay: 'profile-repos-active',
            followersDisplay: 'profile-followers-not-active'
        })
    }

    onFollowersClick = () => {
        this.setState({
            reposBackground: '',
            followersBackground: 'active-tab',
            reposDisplay: 'profile-repos-not-active',
            followersDisplay: 'profile-followers-active'
        })
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

    fetchRepos = () => {
        if (this.props.user) {
            fetch(`https://api.github.com/users/${this.props.user.login}/repos`)
            .then(response => response.json())
            .then(data => {
                const formattedData = Object.keys(data)
                    .map(key => ({
                            id: key,
                            ...data[key]
                        })
                    );

                this.setState({
                    repos: formattedData
                })
                console.log('repos:', this.state.repos);
            })
        } else {
            console.log('There is no user repos');
        }
        
    }

    componentDidMount(){
        this.fetchFollowers()
        this.fetchRepos()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.user !== this.props.user) {
            this.fetchFollowers()
            this.fetchRepos()
        }
    }


    render() {
        return(
            <div className='profile-page-repos' >
                {
                    this.props.user
                    ?
                    <div className='profile-page-repos-container' >
                        <div className='profile-tabs' >
                            <div 
                            onClick={this.onReposClick} 
                            className={`${'tab'} ${this.state.reposBackground}`} 
                            >
                                Repositories ({this.state.repos.length})
                            </div>
                            <div  
                            onClick={this.onFollowersClick} 
                            className={`${'tab'} ${this.state.followersBackground}`} 
                            >
                                Followers ({this.state.followers.length})
                            </div>
                        </div>
                        <div className='profile-repos-followers' >
                            <div 
                                onClick={this.onReposClick} 
                                className={`${'profile-repos'} ${this.state.reposDisplay}`}  
                                >
                                {
                                    this.state.repos.map(repo => (
                                        <a 
                                        target='_blanck' 
                                        href={repo.html_url} 
                                        style={{ textDecoration: 'none' }} 
                                        key={repo.id}
                                        >
                                            <div className='repo'  >
                                                <div className='repo-container' >
                                                    <div className='repo-owner-avatar-container' >
                                                        <img className='repo-owner-avatar' src={repo.owner.avatar_url} alt='repo-owner-avatar' />
                                                    </div>
                                                    <div className='repo-info' >
                                                        <p className='repo-name' >{repo.name}</p>
                                                        <p className='repo-forks' >Forked from {repo.full_name} </p>
                                                        <p className='repo-desription' > {repo.description} </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        
                                    ))
                                }
                            </div>
                            <div 
                                onClick={this.onFollowersClick} 
                                className= {`${'profile-followers'} ${this.state.followersDisplay}`}  
                                >
                                    {
                                        this.state.followers.map(follower => (
                                            <Link 
                                            onClick={() => this.props.getUser(follower)} 
                                            key={follower.id} 
                                            to={`/profilePage/${follower.login}`} 
                                            style={{ textDecoration: 'none' }} >
                                                <div  className='follower-card' >
                                                    <div className='follower-card-container' >
                                                        <div className='follower-avatar-container' >
                                                            <img 
                                                                className='follower-avatar' 
                                                                src={follower.avatar_url} 
                                                                alt="follower-avatar_url" />
                                                        </div>
                                                        <p className='follower-name' >James Beard</p>
                                                        <p className='follower-nickname' > {follower.login} </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))
                                    }
                                
                            </div>
                        </div>
                    </div>
                    :
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
                            <div 
                                onClick={this.onReposClick} 
                                className={`${'profile-repos'} ${this.state.reposDisplay}`}  
                            >
                                <div className='repo' >
                                    <div className='repo-container' >
                                        <div className='repo-owner-avatar-container' >
                                            <img className='repo-owner-avatar' src={repoOwnerAvatar} alt='repo-owner-avatar' />
                                        </div>
                                        <div className='repo-info' >
                                            <p className='repo-name' >bookstore-advanced</p>
                                            <p className='repo-forks' >Forked from octodemo-containers/bookstore-advanced</p>
                                            <p className='repo-desription' >GitHub Advanced Bookstore Demo Repository. Automation via GitHub Actions and Deployments to Cloud environments.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div 
                                onClick={this.onFollowersClick} 
                                className= {`${'profile-followers'} ${this.state.followersDisplay}`}  
                            >
                                <div className='follower-card' >
                                    <div className='follower-card-container' >
                                        <div className='follower-avatar-container' >
                                            <img 
                                            className='follower-avatar' 
                                            src={profileAvatarPlaceholder} 
                                            alt="follower-avatar_url" />
                                        </div>
                                        <p className='follower-name' >James Beard</p>
                                        <p className='follower-nickname' > nickname </p>
                                    </div>
                                </div>
                            </div>
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
    getUser,
    cleanUser,
    fetchUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePageRepos);