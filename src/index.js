import React from "react";
import ReactDOM from "react-dom";
import { ButtonPad } from "./ButtonPad";
import "./styles.css";
import "./W3.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: "0",
      operation: null,
      mode: "pos"
    };
    this.values = {
      current: "0",
      holding: 0
    };
    this.equalsHandler = this.equalsHandler.bind(this);
    this.changeAnswerHandler = this.changeAnswerHandler.bind(this);
    this.operationHandler = this.operationHandler.bind(this);
    this.updateAnswer = this.updateAnswer.bind(this);
    this.updateOperation = this.updateOperation.bind(this);
    this.decimalHandler = this.decimalHandler.bind(this);
  }

  changeAnswerHandler(newValue) {
    const value = this.values;
    switch (newValue) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case ".":
        value.current =
          value.current === "0" && newValue !== "."
            ? newValue
            : value.current + newValue;
        this.updateAnswer(value.current);
        break;
      case "+":
      case "-":
      case "*":
      case "/":
      case "=":
        this.operationHandler(newValue);
        break;
      case "%":
        this.updateOperation("*");
        value.holding = value.current === "0" ? value.holding : value.current;
        value.current = "0.01";
        this.updateOperation("*");
        this.equalsHandler("*");
        break;
      case "C":
        value.current = "0";
        this.updateAnswer(value.current);
        break;
      case "AC":
        value.current = "0";
        value.holding = 0;
        this.updateOperation(null);
        this.updateAnswer(value.current);
        break;
      case "+/-":
        let sign = "";
        if (this.state.mode === "pos") {
          sign = "-";
        } else {
          sign = "";
        }
        value.current = sign + value.current;
        this.updateAnswer(value.current);
        value.current = value.current === "-0" ? "-" : value.current;
        break;
      default:
        this.value = "Error";
    }
  }

  operationHandler(operation) {
    const value = this.values;
    value.holding = this.decimalHandler(value.holding);
    value.current = this.decimalHandler(value.current);
    if (
      this.state.operation != null &&
      !(operation === this.state.operation) &&
      operation !== "="
    ) {
      this.equalsHandler();
    }
    switch (operation) {
      case "+":
        value.holding += value.current;
        value.current = "0";
        this.updateAnswer(value.current);
        this.updateOperation("+");
        break;
      case "-":
        if (value.holding === 0) {
          value.holding += value.current;
        } else {
          value.holding -= value.current;
        }
        value.current = "0";
        this.updateAnswer(value.current);
        this.updateOperation("-");
        break;
      case "*":
        if (value.current === 0 && value.holding !== 0) {
          value.current = "0";
        } else if (value.holding === 0) {
          value.holding += value.current;
        } else {
          value.holding *= value.current;
        }
        value.current = "0";
        this.updateAnswer(value.current);
        this.updateOperation("*");
        break;
      case "/":
        if (
          value.current === 0 &&
          value.holding !== 0 &&
          this.state.operation === "="
        ) {
          value.current = "0";
        } else if (value.holding === 0) {
          value.holding += value.current;
        } else {
          value.holding /= value.current;
        }
        value.current = "0";
        this.updateAnswer(value.current);
        this.updateOperation("/");
        break;
      case "=":
        this.equalsHandler();
        break;
      default:
        console.log("Error in operation " + operation);
        break;
    }
  }

  equalsHandler(override) {
    let op =
      override === undefined ? this.state.operation.substring(0, 1) : override;
    const value = this.values;
    if (op === "+") {
      value.holding += value.current;
    } else if (op === "-") {
      value.holding += -value.current;
    } else if (op === "*") {
      value.holding *= value.current;
    } else if (op === "/") {
      if (value.current === 0 && this.state.operation !== "=") {
        this.updateAnswer("undefined");
        return;
      }
      value.holding /= value.current;
    } else if ("=") {
      return;
    } else {
      console.log("no sign found " + this.state.operation);
      return;
    }
    let num = value.holding;
    value.holding =
      Math.round(
        num * 100 +
          0.1 ** (17 - 2 - (Math.round(num * 100) / 100).toString().length)
      ) / 100;
    this.updateAnswer(value.holding);
    this.updateOperation("=");
    value.current = "0";
  }

  decimalHandler(newValue) {
    let ret = parseFloat(newValue);
    return ret;
  }
  updateAnswer(newValue) {
    this.setState({
      answer: newValue
    });
  }

  updateOperation(newValue) {
    this.setState({
      operation: newValue
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Code Calculator</h1>
        <h4>By. Alex Hoerr</h4>

        <ButtonPad
          onNumber={this.changeAnswerHandler}
          answer={this.state.answer}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
