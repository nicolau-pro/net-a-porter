import React, { Component } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    min: 1,
    max: 3999,
    roman: [],
    input: "in",
    output: {
      text: "",
      result: ""
    }
  };

  componentDidMount() {
    this.setState({ roman: require("./Roman.json") });
    console.log("Loaded");
  }

  handleChange = value => {
    this.setState({ output: this.processValue(value) });
  };

  processValue = value => {
    if (value.length === 0) {
      // Empty string
      return {
        text: "",
        result: ""
      };
    } else {
      if (value.match(/^-{0,1}\d+$/)) {
        // valid integer:
        var int = parseInt(value);
        if (int >= this.state.min && int <= this.state.max)
          // inside the numbers range:
          return {
            text: "This is an integer number and the roman numeral is:",
            result: this.state.roman[int]
          };
        // outside the numbers range:
        else
          return {
            text:
              "This is an integer number but ouside the " +
              this.state.min +
              " to " +
              this.state.max +
              " range.",
            result: ""
          };
      } else {
        var index = this.state.roman.indexOf(value.toUpperCase());
        if (index === -1)
          // a roman numeral out or range or wrong input:
          return {
            text:
              "The input is not a known roman numeral (in the " +
              this.state.min +
              " to " +
              this.state.max +
              " range.",
            result: ""
          };
        // found the roman numeral:
        else
          return {
            text: "The roman numeral corresponds to this value:",
            result: index
          };
      }
    }
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <Main handleChange={this.handleChange} output={this.state.output} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
