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
      answer: 0
    };
    this.changeAnswer = this.changeAnswer.bind(this);
  }
  changeAnswer(newAnswer) {
    this.setState({
      answer: newAnswer
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Code Calculator</h1>
        <Answer answer={this.state.answer} />
        <ButtonPad onClick={this.changeAnswer} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
