import React from "react";

export class InputButton extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
    const answer = this.props.value;
    this.props.onClick(answer);
  }
  render() {
    return <button type="button" onClick={this.handleClick}>
    {this.props.value}
    </button>
  }
}
