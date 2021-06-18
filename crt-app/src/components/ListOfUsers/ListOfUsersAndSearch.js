import React from "react";

import '../../style/ListOfUsers/ListOfUsersAndSearch.css'

import SearchUser from "./SearchUser";
import UsersList from "./UsersList";

function ListOfUsersAndSearch () {
    return(
        <div className='list-of-users-and-search' >
            <SearchUser/>
            <UsersList/>
        </div>
    )
}

export default ListOfUsersAndSearch;