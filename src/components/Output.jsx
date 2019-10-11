import React, { Component } from "react";

class Output extends Component {
  state = {};
  render() {
    return (
      <section>
        <p>{this.props.output.text}</p>
        <h2>{this.props.output.result}</h2>
      </section>
    );
  }
}

export default Output;
