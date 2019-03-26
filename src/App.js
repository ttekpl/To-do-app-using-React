import React, { Component } from "react";
import Panel from "./layout/Panel";
import Display from "./layout/Display";
import "./styles/App.css";

class App extends Component {
  state = {
    value: "",
    checked: false,
    tasks: [],
    counter: 0,
    search: "",
    menuHide: true
  };

  handleInputChange = e => {
    if (e.target.className === "make") {
      this.setState({
        value: e.target.value
      });
    } else if (e.target.className === "search") {
      this.setState({
        search: e.target.value
      });
    } else {
      this.setState({
        checked: e.target.checked
      });
    }
  };

  handleFormSubmit = () => {
    const { value } = this.state;
    if (value.length !== 0) {
      const madeDate = new Date();

      this.setState(prevState => {
        const temporaryTasks = [...prevState.tasks];
        temporaryTasks.push({
          name: prevState.value,
          madeDate,
          counter: prevState.counter,
          priority: prevState.checked
        });

        return {
          tasks: temporaryTasks,
          value: "",
          counter: ++prevState.counter,
          checked: false
        };
      });
    }
  };

  handleLiRemove = e => {
    const index = e.target.parentNode["id"];
    this.setState(prevState => {
      const tasks = [...prevState.tasks];
      const temporaryTasks = tasks.filter(task => {
        return task.counter + "" !== index;
      });
      console.log(temporaryTasks);
      console.log(index);
      return {
        tasks: temporaryTasks
      };
    });
  };

  handleHamburgerClick = () => {
    this.setState(prevState => ({
      menuHide: !prevState.menuHide
    }));
  };

  render() {
    return (
      <div className="App">
        <Panel
          onChange={this.handleInputChange}
          value={this.state.value}
          onSubmit={this.handleFormSubmit}
          checked={this.state.checked}
          menuHide={this.state.menuHide}
          handleHamburgerClick={this.handleHamburgerClick}
        />
        <Display
          data={this.state.tasks}
          remove={this.handleLiRemove}
          onChange={this.handleInputChange}
          search={this.state.search}
        />
      </div>
    );
  }
}

export default App;
