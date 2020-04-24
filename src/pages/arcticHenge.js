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
    meta: parallaxYaml(id: { eq: "arcticHenge" }) {
      name
    }
    images: allFile(
      filter: { relativeDirectory: { eq: "images/arcticHenge" } }
    ) {
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

const ArcticHengePage = ({ data }) => {
  const images = {};
  for (const { node } of data.images.edges) {
    images[node.name] = node;
  }

  const config = [
    { image: images.background, depth: 0 },
    { image: images.arch2, depth: 0.05 },
    { image: images.arch1, depth: 0.1 },
    { image: images.foreground, depth: 0.4 },
  ];

  return (
    <ParallaxLayout name={data.meta.name}>
      <SEO title={data.meta.name} />
      <ContainerDimensions>
        {({ height, width }) => {
          const elementStyle = {
            width: width + 100,
            height: height + 40,
          };
          return (
            <ParallaxContainer height={height} width={width}>
              {config.map(({ image, depth }) => (
                <ParallaxElement key={image.name} data-depth={depth} left={-30}>
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

export default ArcticHengePage;
