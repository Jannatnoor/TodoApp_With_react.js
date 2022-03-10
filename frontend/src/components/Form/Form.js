import * as React from "react";
import "./Form.css";
import { v4 as uuidv4 } from "uuid";
import ToDoList from "../ToDoList/ToDoList";

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
  const onInputChange = (event) => {
    setInput(event.target.value);
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
    setInput("");
  };
  return (
    <div className="list-form">
      <h1>Make a list of Task</h1>
      <hr />
      <form className="input-area" onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Enter a new task"
          value={input}
          required
          onChange={onInputChange}
        />
        <button className="addButton" type="submit">
          {" "}
          Add{" "}
        </button>
        <ToDoList todos={todos} setTodos={setTodos} />
      </form>
    </div>
  );
};

export default Form;
