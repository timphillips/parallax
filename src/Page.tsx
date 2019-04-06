import React, { Component } from "react";
import Parallax from "parallax-js";
import ContainerDimensions from "react-container-dimensions";

class PageContent extends Component<{ height: number; width: number }> {
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
    const containerHeight = this.props.height;
    const containerWidth = this.props.width;
    let width = containerWidth;
    let height = (2 / 3) * width;
    if (height > containerHeight) {
      height = containerHeight;
    }
    if (height < containerHeight) {
      height = containerHeight;
      width = containerWidth;
    }

    const elementWidth = width + 80;
    const elementHeight = height + 80 * 0.666;
    const elementStyle = {
      width: elementWidth + "px",
      height: elementHeight + "px"
    };

    return (
      <React.Fragment>
        <div
          className="parallax"
          data-limit-y="30"
          style={{
            width: width + "px",
            height: height + "px"
          }}
          ref={el => (this.scene = el)}
        >
          <div
            data-depth="0"
            style={elementStyle}
            className="parallaxElement arcticHenge-background"
          />
          <div
            data-depth="0.05"
            style={elementStyle}
            className="parallaxElement arcticHenge-arch2"
          />
          <div
            data-depth="0.1"
            style={elementStyle}
            className="parallaxElement arcticHenge-arch1"
          />
          <div
            data-depth="0.4"
            style={elementStyle}
            className="parallaxElement arcticHenge-foreground"
          />
        </div>
        ,
        <div
          className="pageMetaBar"
          style={{
            width: width + "px"
          }}
        >
          <p className="pageMetaInfo">Arctic Henge, Iceland</p>
        </div>
      </React.Fragment>
    );
  }
}

export class Page extends Component<{ id: string }> {
  render() {
    return (
      <div className="page">
        <ContainerDimensions>
          {({ height, width }) => {
            return <PageContent height={height} width={width} />;
          }}
        </ContainerDimensions>
      </div>
    );
  }
}
