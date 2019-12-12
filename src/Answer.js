import React from "react";

export class Answer extends React.Component {
  render() {
    return (
      <div className="Answer">
        <h2>{this.props.answer}</h2>
      </div>
    );
  }
}
