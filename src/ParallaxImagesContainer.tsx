import React, { Component } from "react";

export class ParallaxImagesContainer extends Component {
  render() {
    return (
      <div className="ParallaxImageContainer">
        <div>PARALLAX</div>
        {this.props.children}
      </div>
    );
  }
}
