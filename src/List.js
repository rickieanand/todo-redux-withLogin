import React, { Component } from 'react';
import './App.css';

class List extends Component {

  render() {
    const {data, deleteHandler} = this.props
    console.log('data', data)
    return (data ?
      <div className="App">
        {
          data.map((item, key)=>(<div className='list' key={key}>{item}<span className='delete' onClick={deleteHandler} id={key}>X</span></div>))
        }
      </div>
      :
      <div>Your data is empty</div>
    );
  }
}

export default List;
