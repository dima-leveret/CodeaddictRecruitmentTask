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

        this.props.setInputValue(event.target.value)
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

    render() {
        return(
            <div className='search-container' >
                <div  className='user-search'>
                    <h3>Meet your future team!</h3>
                    <form className='search-input-container'>
                        <input
                        autocomplete="off"
                        type='text'
                        placeholder='Search by Nickname'
                        id='search'
                        name='inputValue'
                        value={this.state.inputValue}
                        onChange={this.handleOnInputChange}
                        />  
                        {
                            this.props.searchInput !== ''
                            &&
                            <span onClick={() => this.cleanSearchValue()} className='cross-container' >
                                <img className='cross' src={cleanInput} alt='cross'/>   
                            </span>
                        }
                        
                        <label
                        onClick={() => this.props.setInputValue(this.state.inputValue)}
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
    cleanInputValue,
    setGrayColor
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchUser);