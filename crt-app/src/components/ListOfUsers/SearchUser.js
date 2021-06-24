import React from "react";
import { connect } from 'react-redux';
import { setInputValue, cleanInputValue } from "../../state/users";
import { setGrayColor } from '../../state/navColor';

import cleanInput from '../../img/closeBurger.svg'

import "../../style/ListOfUsers/SearchUser.css"

class SearchUser extends React.Component {

    state = {
        inputValue: '',
    }

    handleOnInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })

        // this.props.setInputValue(event.target.value)
    }

    cleanSearchValue = () => {
        this.props.cleanInputValue();
        this.setState({
            inputValue: '',
        })
    }

    componentDidMount() {
        this.props.setGrayColor()
    }

    onSearchedUserClick = (nickname) => {
        this.setState({
            inputValue: nickname,
        })
    }

    render() {
        return(
            <div className='search-container' >
                <div  className='user-search'>
                    <h3>Meet your future team!</h3>
                    <form className='search-input-container'>
                    <div className='cross-search' >
                        <input
                        className='search-input'
                        autoComplete="off"
                        type='text'
                        placeholder='Search by Nickname'
                        id='search'
                        name='inputValue'
                        value={this.state.inputValue}
                        onChange={this.handleOnInputChange}
                        /> 
                        
                        {
                            this.state.inputValue !== ''
                            &&
                            <span onClick={() => this.cleanSearchValue()} className='cross-container' >
                                <img className='cross' src={cleanInput} alt='cross'/>   
                            </span>
                        }
                            
                        </div> 
                        <label
                            className='serach-btn'
                            onClick={() => this.props.setInputValue(this.state.inputValue)}
                            htmlFor='search' 
                            >Search
                        </label>
                    </form>
                    <div className='user-searcher-container' >
                    {
                        this.state.inputValue !== ''
                        &&
                        this.props.users
                        .filter(user => 
                            user.login.replaceAll('[^A-Za-z0-9]', '').toLowerCase().includes(this.state.inputValue.toLocaleLowerCase())
                        )
                        .map(user => (
                            
                            <div  onClick={() => this.onSearchedUserClick(user.login)} key={user.id} className='searched-users' >
                                <img className='mini-avatar' src={user.avatar_url} alt='mini-avatar' />
                                <p className='searched-user-login' > {user.login} </p>
                            </div>
                            
                        ))
                    }
                    </div>
                </div>
            </div>
            
        )
    }
}

const mapStateToProps = (state) => ({
    searchInput: state.users.searchInput,
    users: state.users.data
})


const mapDispatchToProps = {
    setInputValue,
    cleanInputValue,
    setGrayColor
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchUser);