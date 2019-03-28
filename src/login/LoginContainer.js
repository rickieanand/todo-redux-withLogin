import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import fire from '../config/Fire';
import img from '../assets/user.png'
import '../App.css'

class LoginContainer extends Component {

    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            isLoggedIn: false
        }
    }

    changeEmailHandler = (e) => {
        const { value } = e.currentTarget
        this.setState({ email: value })
    }

    changePasswordHandler = (e) => {
        const { value } = e.currentTarget
        this.setState({ password: value })
    }

    login = (e) => {
        e.preventDefault();
        fire.auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((u) => {
                u && this.setState({ isLoggedIn: true })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    signup = (e) => {
        e.preventDefault();
        fire.auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((u) => {
            })
            .then((u) => {
                u && this.setState({ isLoggedIn: true })
                console.log(u)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render = () => {
        return (
            fire.auth().currentUser ? <Redirect to='/app' /> :
            <div className='login-container'>
                    
                    <form className='login-form' ref="form">
                            <div className='profile-image'>
                                <img src={img} alt='profile' />
                            </div>
                            <input
                                id="username"
                                name="username"
                                onChange = {this.changeEmailHandler}
                                type='email'
                                autoComplete="username"
                                autoFocus 
                                placeholder='Enter your email'
                                />
                            <input
                                type="password"
                                id="password"
                                name="password"
                                onChange = {this.changePasswordHandler}
                                autoComplete="current-password" 
                                placeholder='Enter your password'
                                />
                            <div className='cta-container'>
                                <div className='section'>
                                    <div onClick={this.login} className='cta'> Sign in </div>
                                    <div onClick={this.login} className='cta'> Sign up </div>
                                </div>
                                <div onClick={this.login} className='cta'> forgot ? </div>
                            </div>
                    </form>
            </div>
        )
    }
}

export default LoginContainer
