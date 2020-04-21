import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  color: white;
  font-size: 13px;
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: underline;
  text-underline-position: under;
`;

const Footer = () => (
  <StyledFooter>
    Created by{" "}
    <FooterLink
      href="https://www.tim-phillips.com"
      target="_blank"
      rel="noopener noreferrer"
      title="tim-phillips.com"
    >
      Tim Phillips
    </FooterLink>
    . Source on{" "}
    <FooterLink
      href="https://github.com/timphillips/parallax"
      target="_blank"
      rel="noopener noreferrer"
      title="Parallax on GitHub"
    >
      GitHub
    </FooterLink>
    .
  </StyledFooter>
);

export default Footer;
