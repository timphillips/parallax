import React, { Component } from "react";
import Parallax from "parallax-js";

export class Page extends Component<{ id: string }> {
  componentDidMount() {
    this.parallax = new Parallax(this.scene, {});
  }
  componentWillUnmount() {
    if (this.parallax) {
      this.parallax.destroy();
    }
  }

  parallax: Parallax | undefined;
  scene: HTMLDivElement | null | undefined;

  render() {
    return (
      <div className="page">
        <div className="parallaxContainer">
          <div
            className="parallax"
            data-limit-y="30"
            ref={el => (this.scene = el)}
          >
            <div
              data-depth="0"
              className="parallaxElement arcticHenge-background"
            />
            <div
              data-depth="0.05"
              className="parallaxElement arcticHenge-arch2"
            />
            <div
              data-depth="0.1"
              className="parallaxElement arcticHenge-arch1"
            />
            <div
              data-depth="0.4"
              className="parallaxElement arcticHenge-foreground"
            />
          </div>
        </div>
        {/*<div className="pageMetaBar">
          <p className="pageMetaInfo">Artic Henge, Iceland</p>
          <p className="pageMetaInfo">2018</p>
        </div>*/}
      </div>
    );
  }
}
