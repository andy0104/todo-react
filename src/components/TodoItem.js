import React from 'react';

const TodoItem = (props) => {
  let {title} = props.item;

  return (
    <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
      <h6>{title}</h6>
      <div className="todo-icon">
        <span className="mx-2 text-success" onClick={props.handleEdit} style={{'cursor': 'pointer'}}>
          <i className="fas fa-pen"></i>          
        </span>
        <span className="mx-2 text-danger" onClick={props.handleDelete} style={{'cursor': 'pointer'}}>
          <i className="fas fa-trash"></i>
        </span>
      </div>
    </li>
  );
}

export default TodoItem;