import React from "react";
import { TbTrashOff } from "react-icons/tb";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className="list">
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <label htmlFor="">
              <input
                checked={todo.completed}
                type="checkbox"
                onChange={(e) => toggleTodo(todo.id, e.target.checked)}
              />
              {todo.title}
            </label>
            <TbTrashOff
              onClick={() => deleteTodo(todo.id)}
              className="btn remove"
            />
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
