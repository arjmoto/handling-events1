import React from "react";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click me</button>
        <div id="msg">{this.state.isToggleOn ? "You are amazing :v" : ""}</div>
      </div>
    );
  }
}

export default Main;
