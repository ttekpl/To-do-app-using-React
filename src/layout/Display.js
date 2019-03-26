import React from "react";
import "../styles/Display.css";

const Display = props => {
  let tasks = props.data;
  if (props.search) {
    tasks = tasks.filter(task =>
      task.name.toUpperCase().includes(props.search.toUpperCase())
    );
  }

  const liTasks = tasks.map(task => (
    <li
      key={task.counter}
      id={task.counter}
      className={task.priority ? "priority" : ""}
    >
      <h1 className="task__h1">Tytuł: {task.name}</h1>
      <h2 className="task__h2">Dodane: {task.madeDate.toLocaleDateString()}</h2>
      <button onClick={props.remove}>X</button>
    </li>
  ));

  return (
    <div className="display">
      <label htmlFor="">
        <input type="text" className="search" onChange={props.onChange} />
        <i className="fas fa-search" />
      </label>
      <h1>Tasks List</h1>
      <ul>{liTasks}</ul>
    </div>
  );
};

export default Display;
