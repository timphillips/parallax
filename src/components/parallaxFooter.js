import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  left 0;
  right: 0;
  bottom: 0;
  padding: 10px 20px;
  font-size: smaller;
`;

const ParallaxFooter = ({ name }) => <StyledFooter>{name}</StyledFooter>;

export default ParallaxFooter;
