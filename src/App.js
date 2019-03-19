import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import List from './components/List'
import AddData from './components/AddData'
import { getData, receiveData, failedData } from './components/ActionCreator'


class App extends Component {

    constructor(props) {
        super(props)
        this.state= {
          currentItem: "",
          list: []
        }
      }
    
      componentDidMount = () => { 
        this.props.dispatch(getData())
        axios.get('https://api.myjson.com/bins/1eud9a')
          .then((response)=>{
            this.setState({list: response.data})
            this.props.dispatch(receiveData(response.data))
          })
          .catch(function (error) {
            this.props.dispatch(failedData(error))
          })
      }
    
      inputHandler = (event) => (
        this.setState({
          currentItem: event.target.value
        })
      )
      
      submitHandler = () => {
        const {list, currentItem} = this.state
        this.setState({
          list: [...list, currentItem]
        }, function(){
          this.setState({currentItem: ''})
        })
      }
      deleteHandler = (event) => {
        const currentItem = event.target.id,
          {list} = this.state
          list.splice(currentItem, 1)
          this.setState({list})
      }
    
  render() {
    return (
      <div>
        <AddData value={this.state.currentItem} inputHandler={this.inputHandler} submitHandler={this.submitHandler}/>
        <List data={this.state.list} deleteHandler={this.deleteHandler}/>
      </div>
    );
  }
}

/* 
* mapStateToProps
*/
const mapStateToProps = state => (
  {
  ...state,
  list: state.todoReducer && state.todoReducer.list ? state.todoReducer.list : []
})

export default connect(mapStateToProps)(App)
