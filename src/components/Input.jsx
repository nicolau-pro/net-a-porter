import React, { Component } from "react";

class Input extends Component {
  state = {};

  handleChange = event => {
    this.props.handleChange(event.target.value);
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Type here"
            onChange={this.handleChange}
          />
        </form>
      </section>
    );
  }
}

export default Input;
