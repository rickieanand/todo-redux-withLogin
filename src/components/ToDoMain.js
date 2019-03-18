import React, { Component } from 'react';
import List from './List'
import AddData from './AddData'


class ToDoMain extends Component {

    constructor() {
        super()
        this.state= {
          currentItem: "",
          list:["a","b","c"]
        }
      }
    
      componentDidMount(){
        // https://api.myjson.com/bins/1eud9a
    
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
          // console.log(newList)
          // delete list[currentItem]
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

export default ToDoMain;