import React from "react";

import UserCard from './UserCard';
import Pagination from './Pagination'

import '../../style/ListOfUsers/UsersList.css'

import arrowLeft from '../../img/arrow-left.svg'
import arrowRight from '../../img/arrow-right.svg'

import { connect } from 'react-redux';
import { fetchUsers } from '../../state/users';

class UsersList extends React.Component {

    state = {
        currentPage: 1,
        usersPerPage: 12,
    }

    componentDidMount(){
        this.props.fetchUsers();
    }

    render() {

        const lastUserIndex = this.state.currentPage * this.state.usersPerPage;
        const firstUserIndex = lastUserIndex - this.state.usersPerPage;
        const currentUsers = this.props.users.slice(firstUserIndex, lastUserIndex);

        const paginate = pageNamber => {
            this.setState({
                currentPage: pageNamber,
            })
        }

        return(
            <div className='users' >
                <div className='users-list' >
                    {
                        currentUsers
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
                        <button className='btn btn-left' >
                            <img src={arrowLeft} alt='arrowLeft' />
                        </button>
                        <button className='btn btn-right' >  
                            <img src={arrowRight} alt='arrowRight' />  
                        </button>
                    </div>
                </div>
                <Pagination
                    usersPerPage={this.state.usersPerPage}
                    totalUsers={this.props.users.length}
                    paginate={paginate}
                />
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