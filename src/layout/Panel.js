import React from "react";
import "../styles/Panel.css";

const Panel = props => {
  const classes = `panel ${!props.menuHide ? "active" : ""}`;

  return (
    <>
      <i
        className={`fas fa-${props.menuHide ? "bars" : "times"}`}
        onClick={props.handleHamburgerClick}
      />
      <div className={classes}>
        <h1>Type your task</h1>
        <label htmlFor="priority" className="container">
          Priority
        </label>
        <input
          id="priority"
          type="checkbox"
          className="priority"
          checked={props.checked}
          onChange={props.onChange}
        />
        <input
          className="make"
          onChange={props.onChange}
          value={props.value}
          type="text"
        />
        <button onClick={props.onSubmit}>Add</button>
      </div>
    </>
  );
};

export default Panel;
