import React from "react";

const TodoFilter = ({ TodoFilter }) => {
  return (
    <select onChange={(event) => TodoFilter(event.target.value)}>
      <option value="all">All</option>
      <option value="yes">Completed</option>
      <option value="no">Not completed</option>
    </select>
  );
};

export default TodoFilter;
