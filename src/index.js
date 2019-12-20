import React from "react";
import ReactDOM from "react-dom";
import { Answer } from "/src/Answer.js";
import { ButtonPad } from "./ButtonPad";
import "./styles.css";
import "./W3.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: 0,
      operator: null
    };
    this.values = {
      current: 0,
      previous: 0
    };
    this.changeAnswer = this.changeAnswer.bind(this);
  }

  changeAnswer(newValue) {
    let previousValue = this.state.answer + "";
    let value = 0;
    if (!isNaN(newValue)) {
      value = parseInt(newValue, 10) + "";
    } else if (newValue.includes("+")) {
      previousValue = "0";
      value = "plus (WIP)";
    } else if (newValue.includes("-")) {
      value = "minus (WIP)";
    } else if (newValue.includes("c")) {
      value = 0;
      previousValue = 0;
    }
    this.values.current = previousValue === "0" ? value : previousValue + value;
    this.setState({
      answer: this.values.current
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Code Calculator</h1>
        <Answer answer={this.state.answer} />
        <ButtonPad onNumber={this.changeAnswer} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
