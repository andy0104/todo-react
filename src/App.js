import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';

import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

class App extends React.Component {
  state = {
    items: [],
    id: uuid(),
    item: '',
    editItem: false
  };
  handleInputChange = (event) => {
    // let name = event.target.name;
    let value = event.target.value;
    this.setState(() =>({item: value}));
  };
  handleButtonSubmit = (event) => {
    event.preventDefault();
    let todo = {id: this.state.id, title: this.state.item};
    let updatedItems = [...this.state.items, todo];
    this.setState(
      {
        items: updatedItems,
        id: uuid(),
        item: '',
        editItem: false
      });
  };
  handleTodoClear = (event) => {
    event.preventDefault();
    this.setState({
      items: [],
      item: '',
      id: uuid(),
      editItem: false
    })
  };
  handleDelete = (event, id) => {
    event.preventDefault();
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filteredItems,
      id: uuid(),
      item: '',
      editItem: false
    })
  };
  handleEdit = (event, id) => {
    event.preventDefault();
    const filteredItems = this.state.items.filter(item => item.id !== id);
    const todoItem = this.state.items.find(item => item.id === id);
    this.setState({
      items: filteredItems,
      id: todoItem.id,
      item: todoItem.title,
      editItem: true
    });
  };
  render () {
    return (      
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-md-8 mx-auto mt-4">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput 
              inputValue={this.state.item} 
              handleInputChange={this.handleInputChange} 
              handleButtonSubmit={this.handleButtonSubmit}
              editItem={this.state.editItem}
            />
            <TodoList 
              items={this.state.items} 
              handleTodoClear={this.handleTodoClear} 
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>        
      </div>
    );
  }  
}

export default App;
