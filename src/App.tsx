import React, { Component } from "react";
import "./App.css";
import { ParallaxImage } from "./ParallaxImage";
import { ParallaxImagesContainer } from "./ParallaxImagesContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ParallaxImagesContainer>
          <ParallaxImage id="1" />
          <ParallaxImage id="2" />
          <ParallaxImage id="3" />
        </ParallaxImagesContainer>
      </div>
    );
  }
}

export default App;
