import React, { Component } from 'react';
import ToDo from './ToDo/ToDo'
import fire from './config/Fire'

class App extends Component {
    constructor() {
        super()
        this.state = {
            user: null
        }
    }

    componentDidMount() {
        this.authListener()
    }

    authListener = () => {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user })
            } else {
                this.setState({ user: null })
            }
        })
    }

    render() {
        return (
            <div className='todo-wrapper'>
                <ToDo />
            </div>
        )
    }
}
export default App
