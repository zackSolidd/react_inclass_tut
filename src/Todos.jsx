import React, { Component } from 'react'

class Todos extends Component {
    render() {
      return (
        <div>
          <div> List of all I want to do</div>
          {this.props.todos.map((t,i) => (
            <li key={i}>
              {t.todo}
              <div>
                {t.count > 9 ? (
                  <span style={{ color: "green" }}>{t.count} completed</span>
                ) : (
                  <span style={{ color: "red" }}>uncompleted</span>
                )}
              </div>
            </li>
          ))}
        </div>
      );
    }
  }

export default Todos;
