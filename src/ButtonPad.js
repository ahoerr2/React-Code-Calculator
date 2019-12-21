import React from "react";
import { InputButton } from "/src/InputButton.js";
import { OperationButton } from "/src/OperationButton.js";
import { Answer } from "/src/Answer.js";

export class ButtonPad extends React.Component {
  render() {
    return (
      <div className="w3-bar">
        <Answer answer={this.props.answer} />
        <OperationButton
          value={"AC"}
          onClick={this.props.onNumber}
          color="w3-grey"
        />
        <OperationButton
          value={"C"}
          onClick={this.props.onNumber}
          color="w3-grey"
        />
        <OperationButton
          value={"+/-"}
          onClick={this.props.onNumber}
          color="w3-grey"
        />
        <OperationButton
          value={"/"}
          onClick={this.props.onNumber}
          color="w3-red"
        />
        <br />
        <InputButton value={"7"} onClick={this.props.onNumber} />
        <InputButton value={"8"} onClick={this.props.onNumber} />
        <InputButton value={"9"} onClick={this.props.onNumber} />
        <OperationButton value={"*"} onClick={this.props.onNumber} />
        <br />
        <InputButton value={"4"} onClick={this.props.onNumber} />
        <InputButton value={"5"} onClick={this.props.onNumber} />
        <InputButton value={"6"} onClick={this.props.onNumber} />
        <OperationButton value={"+"} onClick={this.props.onNumber} />
        <br />
        <InputButton value={"1"} onClick={this.props.onNumber} />
        <InputButton value={"2"} onClick={this.props.onNumber} />
        <InputButton value={"3"} onClick={this.props.onNumber} />
        <OperationButton value={"-"} onClick={this.props.onNumber} />
        <br />
        <InputButton value={"0"} onClick={this.props.onNumber} />
        <InputButton value={"."} onClick={this.props.onNumber} />
        <InputButton value={"%"} onClick={this.props.onNumber} />
        <OperationButton value={"="} onClick={this.props.onNumber} />
        <br />
      </div>
    );
  }
}
