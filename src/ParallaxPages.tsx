import React, { Component } from "react";
import Parallax from "parallax-js";
import ContainerDimensions from "react-container-dimensions";

export const ParallaxPage = (props: {
  children: (props: { height: number; width: number }) => React.ReactNode;
}) => {
  return (
    <div className="page">
      <ContainerDimensions>
        {({ height, width }) => props.children({ height, width })}
      </ContainerDimensions>
    </div>
  );
};

export const InfoBar = (props: { text: string }) => {
  return (
    <div className="infoBarContainer">
      <p className="infoBarParagraph">{props.text}</p>
    </div>
  );
};

export class ParallaxContainer extends Component<{
  height: number;
  width: number;
}> {
  componentDidMount() {
    this.parallax = new Parallax(this.scene, {});
  }
  componentWillUnmount() {
    if (this.parallax) {
      this.parallax.destroy();
    }
  }

  parallax: Parallax | undefined;
  scene: HTMLDivElement | undefined;

  render() {
    return (
      <div
        className="parallax"
        data-limit-y="30"
        style={{
          width: this.props.width + "px",
          height: this.props.height + "px"
        }}
        ref={el => (this.scene = el || undefined)}
      >
        {this.props.children}
      </div>
    );
  }
}

export const ArcticHengePage = () => {
  return (
    <ParallaxPage>
      {({ height: containerHeight, width: containerWidth }) => {
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
          <div
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              width: width + "px"
            }}
          >
            <ParallaxContainer height={height} width={width}>
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
            </ParallaxContainer>
            <InfoBar text="Arctic Henge, Iceland" />
          </div>
        );
      }}
    </ParallaxPage>
  );
};

export const MontserratPage = () => {
  return (
    <ParallaxPage>
      {({ height: containerHeight, width: containerWidth }) => {
        const height = containerHeight;
        const width = (2 / 3) * containerHeight;
        const elementWidth = width + 80;
        const elementHeight = height + 80 * 0.666;
        const elementStyle = {
          width: elementWidth + "px",
          height: elementHeight + "px"
        };

        return (
          <div
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              position: "relative",
              width: width + "px"
            }}
          >
            <ParallaxContainer height={height} width={width}>
              <div
                data-depth="0"
                style={elementStyle}
                className="parallaxElement montserrat-background"
              />
              <div
                data-depth="0.02"
                style={elementStyle}
                className="parallaxElement montserrat-hills"
              />
              <div
                data-depth="0.1"
                style={elementStyle}
                className="parallaxElement montserrat-railing"
              />
              <div
                data-depth="0.4"
                style={elementStyle}
                className="parallaxElement montserrat-pillars"
              />
            </ParallaxContainer>
            <InfoBar text="Montserrat, Spain" />
          </div>
        );
      }}
    </ParallaxPage>
  );
};

export const SkyePage = () => {
  return (
    <ParallaxPage>
      {({ height: containerHeight, width: containerWidth }) => {
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
          <div
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              width: width + "px"
            }}
          >
            <ParallaxContainer height={height} width={width}>
              <div
                data-depth="0"
                style={elementStyle}
                className="parallaxElement skye-background"
              />
              <div
                data-depth="0.02"
                style={elementStyle}
                className="parallaxElement skye-hill2"
              />
              <div
                data-depth="0.04"
                style={elementStyle}
                className="parallaxElement skye-hill1"
              />
              <div
                data-depth="0.08"
                style={elementStyle}
                className="parallaxElement skye-beach"
              />
              <div
                data-depth="0.15"
                style={elementStyle}
                className="parallaxElement skye-foreground"
              />
            </ParallaxContainer>
            <InfoBar text="Skye, Scotland" />
          </div>
        );
      }}
    </ParallaxPage>
  );
};
