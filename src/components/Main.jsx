import React, { Component } from "react";
import Input from "./Input";
import Output from "./Output";

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="container">
          <section>
            <p>
              Type an integer number between 1 and 3999 inclusive to be
              converted to roman numeral or vice-versa
            </p>
          </section>
          <Input handleChange={this.props.handleChange} />
          <Output output={this.props.output} />
        </main>
      </React.Fragment>
    );
  }
}

export default Main;
