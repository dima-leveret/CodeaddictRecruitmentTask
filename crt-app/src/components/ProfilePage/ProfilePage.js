import React from "react";

import { connect } from 'react-redux';
import { cleanUser } from '../../state/users';

import ProfilePageHeader from './ProfilePageHeader';
import ProfilePageRepos from './ProfilePageRepos';

import '../../style/ProfilePage/ProfilePage.css';

class ProfilePage extends React.Component {

    state = {
        subscriptions: [],
        followers: [],
        repos: [],
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


    componentDidMount() {

        this.state.repos.map(repo => (
                
            this.setState({
                repoName: repo.name,
                repoForksUrl: repo.forks_url,
            })
        ))

        this.fetchSunscriptions();
        this.fetchFollowers();
        this.fetchRepos();

    }

    render() {
        return (
            <div className='profile-page' >
                <ProfilePageHeader
                    subscriptions={this.state.subscriptions}
                    followers={this.state.followers}
                />
                <ProfilePageRepos
                    repos={this.state.repos}
                    followers={this.state.followers}
                />
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