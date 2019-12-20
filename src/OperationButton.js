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
    return (
      <button
        className="w3-button w3-red w3-large"
        type="button"
        onClick={this.handleClick}
      >
        {this.props.value}
      </button>
    );
  }
}
