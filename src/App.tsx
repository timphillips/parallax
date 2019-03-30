import React, { Component } from "react";
import "./App.css";
import { PageScrollerContainer } from "./PageScrollerContainer";

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

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <PageScrollerContainer />
      </div>
    );
  }
}

export default App;
