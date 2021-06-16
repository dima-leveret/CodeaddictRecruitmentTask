import React from "react";

function Pagination({ usersPerPage, totalUsers, paginate }) {

    const pageNumber = [];

    const pages =  Math.ceil(totalUsers/usersPerPage) 

    for (let i = 1; i <= pages; i++) {
        pageNumber.push(i)
    }

    return(
        <div>
            <ul>
                {
                    pageNumber.map(number => (
                        <li key={number} onClick={() => paginate(number)} >
                            {number}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Pagination;