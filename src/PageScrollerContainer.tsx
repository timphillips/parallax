import React, { Component } from "react";
import ReactPageScroller from "react-page-scroller";
import { ArcticHengePage, MontserratPage, SkyePage } from "./ParallaxPages";
import { StartPage } from "./StartPage";

export class PageScrollerContainer extends Component<{}> {
  constructor(props: {}) {
    super(props);
    this.state = { currentPage: 1 };
  }

  pageOnChange = (currentPage: number) => {
    this.setState({ currentPage });
  };

  render() {
    return (
      <ReactPageScroller animationTimer={500} pageOnChange={this.pageOnChange}>
        <StartPage />
        <SkyePage />
        <ArcticHengePage />
        <MontserratPage />
      </ReactPageScroller>
    );
  }
}
