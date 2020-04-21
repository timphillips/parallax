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
    meta: parallaxYaml(id: { eq: "montserrat" }) {
      name
    }
    images: allFile(
      filter: { relativeDirectory: { eq: "images/montserrat" } }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 3000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

const MontserratPage = ({ data }) => {
  const images = {};
  for (const { node } of data.images.edges) {
    images[node.name] = node;
  }

  const config = [
    { image: images.background, depth: 0 },
    { image: images.hills, depth: 0.06 },
    { image: images.railing, depth: 0.15 },
    { image: images.pillars, depth: 0.3 },
  ];

  return (
    <ParallaxLayout name={data.meta.name} ratio={1.5}>
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
                    imgStyle={{
                      objectFit: "contain",
                    }}
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

export default MontserratPage;
