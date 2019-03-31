import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import List from './List'
import AddData from './AddData'
import { getData, receiveData, failedData } from './ActionCreator'
import fire, { database, getTodo } from '../config/Fire'

class ToDo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentItem: "",
            list: [`a`, `b`, `c`],
            // list: [{
            //     id: 0,
            //     task: 'go to Paris',
            //     isComplete: false
            // }, {
            //     id: 1,
            //     task: 'go to Austria',
            //     isComplete: false
            // }, {
            //     id: 2,
            //     task: 'go to Germany',
            //     isComplete: false
            // }
            // ]
        }
    }

    componentDidMount = () => {
        getTodo()
            .then(result => (
                console.log('---->>>>', result.val())
            )
            )

        this.props.dispatch(getData())
        axios.get('https://api.myjson.com/bins/1eud9a')
            .then((response) => {
                this.setState({ list: response.data })
                this.props.dispatch(receiveData(response.data))
            })
            .catch(function (error) {
                this.props.dispatch(failedData(error))
            })
    }

    logout() {
        fire && fire.auth().currentUser && fire.auth().signOut();
    }

    inputHandler = (event) => (
        this.setState({
            currentItem: event.target.value
        })
    )

    submitHandler = () => {
        const { list, currentItem } = this.state

        this.setState({
            list: [...list, currentItem]
        }, function () {
            database.ref('todo/').set({
                ...this.state.list
            });
            this.setState({ currentItem: '' })
        })
    }

    deleteHandler = (event) => {
        const currentItem = event.target.id,
            { list } = this.state
        list.splice(currentItem, 1)
        this.setState({ list })
    }

    render = () => {
        return (
            <div>
                <div className='logout' onClick={this.logout}>logout</div>
                <AddData value={this.state.currentItem} inputHandler={this.inputHandler} submitHandler={this.submitHandler} />
                <List data={this.state.list} deleteHandler={this.deleteHandler} />
            </div>
        )
    }
}

/* 
* mapStateToProps
*/
const mapStateToProps = state => ({
    ...state,
    list: state.todoReducer && state.todoReducer.list ? state.todoReducer.list : []
}
)

export default connect(mapStateToProps)(ToDo)
