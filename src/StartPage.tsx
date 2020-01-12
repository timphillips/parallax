import React from "react";

const thumbnails = {
  arcticHenge: require("./images/arcticHenge/thumbnail.png"),
  skye: require("./images/skye/thumbnail.png"),
  montserrat: require("./images/montserrat/thumbnail.png")
};

interface SceneThumbnailProps {
  readonly id: string;
  readonly label: string;
  readonly onClick: () => void;
}

function SceneThumbnail({ id, label, onClick }: SceneThumbnailProps) {
  return (
    <li
      className="startPageScene"
      onClick={onClick}
      style={{ backgroundImage: `url(${thumbnails[id]})` }}
    >
      <div className="startPageSceneLabel">{label}</div>
    </li>
  );
}

function StartPageHeader() {
  return (
    <header>
      <div className="startPageTitle">Parallax</div>
      <div className="startPageSubtitle">
        Two-and-a-half-dimensional images created from still photographs.
      </div>
    </header>
  );
}

function StartPageFooter() {
  return (
    <div className="startPageFooter">
      Created by{" "}
      <a
        className="startPageFooterLink"
        target="_blank"
        href="http://www.tim-phillips.com"
      >
        Tim Phillips
      </a>
      .
    </div>
  );
}

interface StartPageProps {
  readonly goToPage: (pageNumber: number) => void;
}

export function StartPage({ goToPage }: StartPageProps) {
  return (
    <div className="startPage">
      <StartPageHeader />

      <ul className="startPageSceneContainer">
        <SceneThumbnail
          id="skye"
          label="Skye, Scotland"
          onClick={() => goToPage(1)}
        />
        <SceneThumbnail
          id="arcticHenge"
          label="Arctic Henge, Iceland"
          onClick={() => goToPage(2)}
        />
        <SceneThumbnail
          id="montserrat"
          label="Montserrat, Spain"
          onClick={() => goToPage(3)}
        />
      </ul>

      <StartPageFooter />
    </div>
  );
}
