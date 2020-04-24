import ContainerDimensions from "react-container-dimensions";
import Image from "gatsby-image";
import ParallaxContainer from "../components/parallaxContainer";
import ParallaxElement from "../components/parallaxElement";
import ParallaxLayout from "../components/parallaxLayout";
import React from "react";
import SEO from "../components/seo";
import { graphql } from "gatsby";

export const pageQuery = graphql`
  query {
    meta: parallaxYaml(id: { eq: "skye" }) {
      name
    }
    images: allFile(filter: { relativeDirectory: { eq: "images/skye" } }) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 3000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

const SkyePage = ({ data }) => {
  const images = {};
  for (const { node } of data.images.edges) {
    images[node.name] = node;
  }

  const config = [
    { image: images.background, depth: 0 },
    { image: images.hill2, depth: 0.02 },
    { image: images.hill1, depth: 0.04 },
    { image: images.beach, depth: 0.08 },
    { image: images.foreground, depth: 0.15 },
  ];

  return (
    <ParallaxLayout name={data.meta.name}>
      <SEO title={data.meta.name} />
      <ContainerDimensions>
        {({ height, width }) => {
          const elementStyle = {
            width: width + 80,
            height: height + 80 * 0.666,
          };
          return (
            <ParallaxContainer height={height} width={width}>
              {config.map(({ image, depth }) => (
                <ParallaxElement key={image.name} data-depth={depth}>
                  <Image
                    fluid={image.childImageSharp.fluid}
                    style={elementStyle}
                  />
                </ParallaxElement>
              ))}
            </ParallaxContainer>
          );
        }}
      </ContainerDimensions>
    </ParallaxLayout>
  );
};

export default SkyePage;
