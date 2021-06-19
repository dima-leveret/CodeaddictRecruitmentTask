import React from "react";
import { Link } from 'react-router-dom';

import UserCard from './UserCard';
// import Pagination from './Pagination'

import '../../style/ListOfUsers/UsersList.css'

import disabledArrow from '../../img/disabled-arrow.svg'
import activeArrow from '../../img/active-arrow.svg'

import { connect } from 'react-redux';
import { fetchUsers } from '../../state/users';

class UsersList extends React.Component {

    state = {
        currentPage: 1,
        usersPerPage: 12,
        pageNumber: [],

        showedUsersNumber: 12,
    }

    componentDidMount(){
        this.props.fetchUsers();
    }


    nextPage = (num) => {
        this.setState({
            currentPage: this.state.currentPage + 1,
        })

        if (this.state.currentPage >= 1) {
            this.setState({
                showedUsersNumber: this.state.showedUsersNumber + num,
            })
        }

    }

    prevPage = (num) => {
        this.setState({
            currentPage: this.state.currentPage - 1,
            showedUsersNumber: this.state.showedUsersNumber - num,
        })
    }


    render() {

        const lastUserIndex = this.state.currentPage * this.state.usersPerPage;
        const firstUserIndex = lastUserIndex - this.state.usersPerPage;
        const currentUsers = this.props.users.slice(firstUserIndex, lastUserIndex);
        const pages = Math.ceil(this.props.users.length / this.state.usersPerPage);

        

        for (let i = 1; i <= pages; i++) {
            this.state.pageNumber.push(i)
        };

        console.log(this.state.currentPage, currentUsers.length);

        // function to show appropriate users on the page
        // const paginate = pageNamber => {
        //     this.setState({
        //         currentPage: pageNamber,
        //     })
        // };


        return(
            <div className='users' >
                <div className='users-list' >
                    {
                        currentUsers
                        .filter(user => 
                            user.login.replaceAll('[^A-Za-z0-9]', '').toLowerCase().includes(this.props.searchInput.toLowerCase())
                        )
                        .map(user => (
                            <Link key={user.id} to='/profilePage' style={{ textDecoration: 'none' }} >
                                <UserCard
                                key={user.id}

                                avatar={user.avatar_url}
                                nickname={user.login}
                                oneUser={user}
                                />
                            </Link>
                        ))
                    }
                </div>
                <div className='showing' >
                    <p className='showing-number' >Showing: {currentUsers.length}/{this.props.users.length} </p>
                    <div className='showing-buttons' >
                        {
                            this.state.currentPage === 1
                            ?
                            <button className='btn btn-disabled' disabled>
                                <img src={disabledArrow} alt='arrowLeft' />
                            </button>
                            :
                            <button className='btn btn-active' onClick={() => this.prevPage(currentUsers.length)} >
                                <img className='active-left-arrow' src={activeArrow} alt='arrowLeft' />
                            </button>
                        }

                        {
                            currentUsers.includes(this.props.users[this.props.users.length - 1])
                            ?
                            <button className='btn btn-disabled' disabled>  
                                <img className='disabled-right-arrow' src={disabledArrow} alt='arrowRight' />  
                            </button>
                            :
                            <button className='btn btn-active' onClick={() => this.nextPage(currentUsers.length)} >  
                                <img src={activeArrow} alt='arrowRight' />  
                            </button>
                        }
                    </div>
                </div>
                {/* <Pagination
                    usersPerPage={this.state.usersPerPage}
                    totalUsers={this.props.users.length}
                    paginate={paginate}
                /> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    users: state.users.data,
    searchInput: state.users.searchInput,
    user: state.users.user
})


const mapDispatchToProps = {
    fetchUsers,
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);