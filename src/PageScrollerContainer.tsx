import React from "react";
import ReactPageScroller from "react-page-scroller";
import { ArcticHengePage, MontserratPage, SkyePage } from "./ParallaxPages";
import { StartPage } from "./StartPage";

export function PageScrollerContainer() {
  let pageScroller: ReactPageScroller;
  return (
    <ReactPageScroller
      animationTimer={500}
      ref={(c: ReactPageScroller) => (pageScroller = c)}
    >
      <StartPage goToPage={pageNumber => pageScroller.goToPage(pageNumber)} />
      <SkyePage />
      <ArcticHengePage />
      <MontserratPage />
    </ReactPageScroller>
  );
}
