import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  return (
    <ul className="list-group my-5">
      <h3 className="text-capitalize text-center">todo list</h3>
      {
        props.items.map((item) =>(
          <TodoItem 
            key={item.id} 
            item={item} 
            handleDelete={(event) => props.handleDelete(event, item.id)}
            handleEdit={(event) => props.handleEdit(event, item.id)}
          />
        ))
      }      
      <button 
        type="button" 
        className="btn btn-block btn-danger text-capitalize mt-5" 
        onClick={props.handleTodoClear}>
        clear list
      </button>
    </ul>
  );
}

export default TodoList;