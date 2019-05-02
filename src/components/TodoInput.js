import React from 'react';

const TodoInput = (props) => {
  let btnText = props.editItem ? 'edit item' : 'add item';
  let btnClass = props.editItem ? 'btn btn-success btn-block mt-4' : 'btn btn-primary btn-block mt-4';
  return (
    <div className="card card-body my-4">
      <form onSubmit={props.handleButtonSubmit}>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text bg-primary text-white">
              <i className="fas fa-book"></i>
            </div>
          </div>
          <input type="text" name="todoInput" className="form-control text-capitalize" placeholder="Add a todo item" onChange={props.handleInputChange} value={props.inputValue} />
        </div>
        <button type="submit" className={btnClass}>{btnText}</button>
      </form>
    </div>
  );
}

export default TodoInput;