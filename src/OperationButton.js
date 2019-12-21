import React from "react";
export class OperationButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    const answer = this.props.value;
    this.props.onClick(answer);
  }
  render() {
    let color = this.props.color === undefined ? "w3-red" : this.props.color;
    let name = "w3-button w3-large " + color;
    return (
      <button className={name} type="button" onClick={this.handleClick}>
        {this.props.value}
      </button>
    );
  }
}
