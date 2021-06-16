import React from "react";
import { connect } from 'react-redux';
import { fetchUsers } from '../../state/users'

class UsersList extends React.Component {

    componentDidMount(){
        this.props.fetchUsers();
    }

    render() {
        return(
            <>
                <h3>UsersList</h3>
                {
                    this.props.users
                    .map(user => (
                        <div key={user.id} >
                            <img style={{ width: '100px' }} src={user.avatar_url} alt="user.avatar_url" />
                            <p> {user.login} </p>
                        </div>
                    ))
                }
            </>
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