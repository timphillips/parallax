import styled from "styled-components";

const ParallaxElement = styled.div`
  top: -25px !important;
  left: ${props =>
    typeof props.left === "number" ? props.left : -50}}px !important;
`;

export default ParallaxElement;
