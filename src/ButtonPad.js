import React from "react";
import { InputButton } from "/src/InputButton.js";
export class ButtonPad extends React.Component {
  render() {
    return (
      <div className="w3-bar">
        <InputButton value={7} onClick={this.props.onClick} />
        <InputButton value={8} onClick={this.props.onClick} />
        <InputButton value={9} onClick={this.props.onClick} />
        <br />
        <InputButton value={4} onClick={this.props.onClick} />
        <InputButton value={5} onClick={this.props.onClick} />
        <InputButton value={6} onClick={this.props.onClick} />
        <br />
        <InputButton value={1} onClick={this.props.onClick} />
        <InputButton value={2} onClick={this.props.onClick} />
        <InputButton value={3} onClick={this.props.onClick} />
      </div>
    );
  }
}
