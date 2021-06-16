import React from "react";

import '../../style/ListOfUsers/ListOfUsersAndSearch.css'

import SearchUsers from "./SearchUser";
import UsersList from "./UsersList";

function ListOfUsersAndSearch () {
    return(
        <div className='list-of-users-and-search' >
            <SearchUsers/>
            <UsersList/>
        </div>
    )
}

export default ListOfUsersAndSearch;