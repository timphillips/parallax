import React, { Component } from "react";
import ReactPageScroller from "react-page-scroller";
import { Page } from "./Page";

export class PageScrollerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: 1 };
  }

  pageOnChange = number => {
    this.setState({ currentPage: number });
  };

  render() {
    return (
      <ReactPageScroller animationTimer={400} pageOnChange={this.pageOnChange}>
        <Page id="1" />
        <div>Test</div>
      </ReactPageScroller>
    );
  }
}
