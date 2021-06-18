import React from "react";
import { connect } from 'react-redux';
import { setInputValue, cleanInputValue } from "../../state/users"

import "../../style/ListOfUsers/SearchUser.css"

class SearchUser extends React.Component {


    handleOnInputChange = (event) => {
        this.props.setInputValue(event.target.value)
    }

    cleanSearchValue = () => {
        this.props.cleanInputValue()
    }

    render() {
        return(
            <div className='search-container' >
                <div  className='user-search'>
                    <h3>Meet your future team!</h3>
                    <form className='search-input-container'>
                        <input
                        type='text'
                        placeholder='Search by Nickname'
                        id='search'
                        name='searchValue'
                        value={this.props.searchInput}
                        onChange={this.handleOnInputChange}
                        />
                        <label
                        onClick={this.cleanSearchValue}
                        htmlFor='search' 
                        >Search</label>
                    </form>
                </div>
            </div>
            
        )
    }
}

const mapStateToProps = (state) => ({
    searchInput: state.users.searchInput,
})


const mapDispatchToProps = {
    setInputValue,
    cleanInputValue
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchUser);