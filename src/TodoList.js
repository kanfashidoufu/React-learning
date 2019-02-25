import React, { Component } from 'react';
import TodoItem from './TodoItem';
import './style.css';
//定义一个React组件
class TodoList extends Component {

  constructor(props){
    super(props);
    this.state = {
      list: [],
      inputValue: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleBtnClick() {
    if (this.state.inputValue !== '') {
        this.setState({
        list: [...this.state.list, this.state.inputValue],
        inputValue: ''
      })
    } else {
      alert('请填写内容！')
    }
  }
  handleInputChange(e){
    this.setState({
      inputValue: e.target.value
    })
  }
  handleDel(index){
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({list});
  }

  handleDelete(index) {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({list});
  }

  getTodoItems() {
    return (
        this.state.list.map((item, index) => {
            return (
              <TodoItem delete={this.handleDelete} key={index} content={item} index={index} />
              )
          })
      )
  }

  render() {
    return (
      <div className="TodoList">
        <div>
          <input value={this.state.inputValue} onChange={this.handleInputChange} />
          <button className='red-btn' onClick={this.handleBtnClick}>add</button>
        </div>
        <ul>
          {this.getTodoItems()}
        </ul>
      </div>
    );
  }
}

export default TodoList;

