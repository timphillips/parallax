import React, { Component } from "react";
import VisibilitySensor from "react-visibility-sensor";

function onChange(isVisible: boolean, id: string) {
  console.log(id, "Element is now %s", isVisible ? "visible" : "hidden");
}

export class ParallaxImage extends Component<{ id: string }> {
  render() {
    return (
      <VisibilitySensor
        partialVisibility
        onChange={visible => onChange(visible, this.props.id)}
      >
        <div className="ParallaxImage">{this.props.id}</div>
      </VisibilitySensor>
    );
  }
}
