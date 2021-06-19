import React from "react";

import { connect } from 'react-redux';
import { cleanUser } from '../../state/users';

import ProfilePageHeader from './ProfilePageHeader'

import '../../style/ProfilePage/ProfilePage.css'

class ProfilePage extends React.Component {

    state = {
        subscriptions: [],
        followers: []
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
                console.log(this.state.subscriptions);
            })
        } else {
            console.log('There is no user');
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
                console.log(this.state.followers);
            })
        } else {
            console.log('There is no user');
        }
        
    }

    componentDidMount() {
        this.fetchSunscriptions();
        this.fetchFollowers();
    }

    render() {
        return (
            <div className='profile-page' >
                <ProfilePageHeader
                    subscriptions={this.state.subscriptions}
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