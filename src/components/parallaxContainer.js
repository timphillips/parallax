import React, { Component } from "react";

import Parallax from "parallax-js";

class ParallaxContainer extends Component {
  componentDidMount() {
    this.parallax = new Parallax(this.scene, {});
  }
  componentWillUnmount() {
    if (this.parallax) {
      this.parallax.destroy();
    }
  }

  render() {
    return (
      <div
        className="parallax"
        data-limit-y="30"
        style={{
          width: this.props.width + "px",
          height: this.props.height + "px",
        }}
        ref={el => (this.scene = el || undefined)}
      >
        {this.props.children}
      </div>
    );
  }
}

export default ParallaxContainer;
