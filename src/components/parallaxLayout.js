import "./layout.css";

import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "gatsby";
import ParallaxFooter from "./parallaxFooter";
import React from "react";
import styled from "styled-components";

const StyledLayout = styled.div`
  height: 100vh;
  overflow: hidden;
  margin: auto;
`;

const StyledBackIcon = styled(FaRegArrowAltCircleLeft)`
  position: fixed;
  height: 40px;
  width: 40px;
  top: 20px;
  left: 20px;
  cursor: pointer;
  color: white;
  opacity: 0.8;
  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
  }
`;

const ParallaxLayout = ({ children, name, ratio }) => {
  const width = ratio ? `calc(90vh / ${ratio})` : "100vw";
  return (
    <StyledLayout style={{ width }}>
      {children}
      <Link to="/">
        <StyledBackIcon />
      </Link>
      <ParallaxFooter>{name}</ParallaxFooter>
    </StyledLayout>
  );
};

export default ParallaxLayout;
