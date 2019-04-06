import React, { Component } from "react";
import ReactPageScroller from "react-page-scroller";
import { Page } from "./Page";

const Header = () => {
  return (
    <div className="header">
      <span className="headerTitle">Parallax</span>
      <span className="headerSubtitle">
        Two-and-a-half-dimensional images created from still photographs
      </span>
    </div>
  );
};

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
        <Header />
        <Page id="1" />
        <Page id="2" />
      </ReactPageScroller>
    );
  }
}
