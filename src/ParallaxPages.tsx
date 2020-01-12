import React, { Component } from "react";
import Parallax from "parallax-js";
import ContainerDimensions from "react-container-dimensions";

interface ParallaxPageProps {
  readonly children: (props: {
    height: number;
    width: number;
  }) => React.ReactNode;
}

function ParallaxPage({ children }: ParallaxPageProps) {
  return (
    <div className="page">
      <ContainerDimensions>
        {({ height, width }) => children({ height, width })}
      </ContainerDimensions>
    </div>
  );
}

function InfoBar({ text }: { text: string }) {
  return (
    <div className="infoBarContainer">
      <p className="infoBarParagraph">{text}</p>
    </div>
  );
}

class ParallaxContainer extends Component<{
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

const arcticHengeImages = {
  background: require("./images/arcticHenge/background.png"),
  arch1: require("./images/arcticHenge/arch1.png"),
  arch2: require("./images/arcticHenge/arch2.png"),
  foreground: require("./images/arcticHenge/foreground.png")
};

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
                style={{
                  ...elementStyle,
                  backgroundImage: `url("${arcticHengeImages.background}")`
                }}
                className="parallaxElement"
              />
              <div
                data-depth="0.05"
                style={{
                  ...elementStyle,
                  backgroundImage: `url("${arcticHengeImages.arch2}")`
                }}
                className="parallaxElement"
              />
              <div
                data-depth="0.1"
                style={{
                  ...elementStyle,
                  backgroundImage: `url("${arcticHengeImages.arch1}")`
                }}
                className="parallaxElement"
              />
              <div
                data-depth="0.4"
                style={{
                  ...elementStyle,
                  backgroundImage: `url("${arcticHengeImages.foreground}")`
                }}
                className="parallaxElement"
              />
            </ParallaxContainer>
            <InfoBar text="Arctic Henge, Iceland" />
          </div>
        );
      }}
    </ParallaxPage>
  );
};

const montserratImages = {
  background: require("./images/montserrat/background.png"),
  hills: require("./images/montserrat/hills.png"),
  railing: require("./images/montserrat/railing.png"),
  pillars: require("./images/montserrat/pillars.png")
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
                className="parallaxElement"
                style={{
                  ...elementStyle,
                  backgroundImage: `url("${montserratImages.background}")`
                }}
              />
              <div
                data-depth="0.02"
                className="parallaxElement"
                style={{
                  ...elementStyle,
                  backgroundImage: `url("${montserratImages.hills}")`
                }}
              />
              <div
                data-depth="0.1"
                className="parallaxElement"
                style={{
                  ...elementStyle,
                  backgroundImage: `url("${montserratImages.railing}")`
                }}
              />
              <div
                data-depth="0.4"
                className="parallaxElement"
                style={{
                  ...elementStyle,
                  backgroundImage: `url("${montserratImages.pillars}")`
                }}
              />
            </ParallaxContainer>
            <InfoBar text="Montserrat, Spain" />
          </div>
        );
      }}
    </ParallaxPage>
  );
};

const skyeImages = {
  background: require("./images/skye/background.png"),
  hill2: require("./images/skye/hill2.png"),
  hill1: require("./images/skye/hill1.png"),
  beach: require("./images/skye/beach.png"),
  foreground: require("./images/skye/foreground.png")
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
                style={{
                  ...elementStyle,
                  backgroundImage: `url("${skyeImages.background}")`
                }}
                className="parallaxElement"
              />
              <div
                data-depth="0.02"
                style={{
                  ...elementStyle,
                  backgroundImage: `url("${skyeImages.hill2}")`
                }}
                className="parallaxElement"
              />
              <div
                data-depth="0.04"
                style={{
                  ...elementStyle,
                  backgroundImage: `url("${skyeImages.hill1}")`
                }}
                className="parallaxElement"
              />
              <div
                data-depth="0.08"
                style={{
                  ...elementStyle,
                  backgroundImage: `url("${skyeImages.beach}")`
                }}
                className="parallaxElement"
              />
              <div
                data-depth="0.15"
                style={{
                  ...elementStyle,
                  backgroundImage: `url("${skyeImages.foreground}")`
                }}
                className="parallaxElement"
              />
            </ParallaxContainer>
            <InfoBar text="Skye, Scotland" />
          </div>
        );
      }}
    </ParallaxPage>
  );
};
