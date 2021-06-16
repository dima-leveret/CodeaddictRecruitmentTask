import React from "react";

import UserCard from './UserCard';

import '../../style/ListOfUsers/UsersList.css'

import arrowLeft from '../../img/arrow-left.svg'
import arrowRight from '../../img/arrow-right.svg'

import { connect } from 'react-redux';
import { fetchUsers } from '../../state/users';

class UsersList extends React.Component {

    componentDidMount(){
        this.props.fetchUsers();
    }

    render() {
        return(
            <div className='users' >
                <div className='users-list' >
                    {
                        this.props.users
                        .map(user => (
                            <UserCard
                            key={user.id}

                            avatar={user.avatar_url}
                            nickname={user.login}
                            />
                        ))
                    }
                </div>
                <div className='showing' >
                    <p className='showing-number' >Showing: {this.props.users.length} </p>
                    <div className='showing-buttons' >
                        <button>
                            <img src={arrowLeft} alt='arrowLeft' />
                        </button>
                        <button>  
                            <img src={arrowRight} alt='arrowRight' />  
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    users: state.users.data,
})


const mapDispatchToProps = {
    fetchUsers,
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);