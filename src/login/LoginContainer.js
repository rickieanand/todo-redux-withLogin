import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

import '../App.css'
class LoginContainer extends Component {

    constructor(props) {
        super(props)
        this.state= {
            validUserName: true,
            validPassword: true,
            isLoggedIn: true
        }
    }

    getActionButtonClass = () => {
        const {validUserName, validPassword} = this.state
        return validUserName && validPassword ? 'active' : 'inactive'
    }
    
    render = () => (
        <>
        {
            this.state.isLoggedIn && <Redirect to='/App' />

        }
            <div className='login-container'>
                <form className='login-form' autoComplete='false' action='#' method='post'>
                    <input type='text' name='username' minLength='8' maxLength='30'/>
                    <input type='password' name='password' minLength='8'/>
                    <input type='submit' className={this.getActionButtonClass()} value='Go' onClick={this.onSubmit} />
                </form> 
            </div>
        </>
    )
}

export default LoginContainer
