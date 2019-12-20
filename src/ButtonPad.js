import React from "react";
import { InputButton } from "/src/InputButton.js";
import { OperationButton } from "/src/OperationButton.js";
export class ButtonPad extends React.Component {
  render() {
    return (
      <div className="w3-bar">
        <InputButton value={7} onClick={this.props.onNumber} />
        <InputButton value={8} onClick={this.props.onNumber} />
        <InputButton value={9} onClick={this.props.onNumber} />
        <br />
        <InputButton value={4} onClick={this.props.onNumber} />
        <InputButton value={5} onClick={this.props.onNumber} />
        <InputButton value={6} onClick={this.props.onNumber} />
        <br />
        <InputButton value={1} onClick={this.props.onNumber} />
        <InputButton value={2} onClick={this.props.onNumber} />
        <InputButton value={3} onClick={this.props.onNumber} />
        <br />
        <InputButton value={0} onClick={this.props.onNumber} />
        <OperationButton value={"-"} onClick={this.props.onNumber} />
        <OperationButton value={"+"} onClick={this.props.onNumber} />
        <br />
        <OperationButton value={"c"} onClick={this.props.onNumber} />
      </div>
    );
  }
}
