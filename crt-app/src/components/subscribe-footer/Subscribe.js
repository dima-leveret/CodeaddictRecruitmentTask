import React from "react";

import "../../style/subscribe-footer/Subscribe.css"

class Subscribe extends React.Component {

    state = {
        inputValue: '',
    }

    handleOnInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmitClick = () => {
        this.setState ({
            inputValue: ''
        })

        console.log(this.state.inputValue);
    }

    render() {
        return (
            <div className='subscribe-container'>
               <h2>Subscribe to get instant alerts</h2>
               <p>Don’t wanna miss something? Subscribe right now and get special deals and monthly newsletter</p>
               <form className='subscribe-input-container'>
                    <input
                    autoComplete="off"
                    value={this.state.inputValue}
                    type='email'
                    placeholder='Enter your email address'
                    id='email'
                    name='inputValue'
                    onChange={this.handleOnInputChange}
                    />
                    <label
                    onClick={() => this.handleOnSubmitClick()} 
                    htmlFor='email' 
                    >Submit</label>
               </form>
            </div>
        )
    }
    
}

export default Subscribe;