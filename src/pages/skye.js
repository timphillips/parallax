import ContainerDimensions from "react-container-dimensions";
import Image from "gatsby-image";
import ParallaxContainer from "../components/parallaxContainer";
import ParallaxElement from "../components/parallaxElement";
import ParallaxLayout from "../components/parallaxLayout";
import React from "react";
import SEO from "../components/seo";
import { graphql } from "gatsby";

/*

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
    */
export const pageQuery = graphql`
  query {
    page: parallaxYaml(id: { eq: "skye" }) {
      name
      layers {
        depth
        image {
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
  console.log(data);

  return (
    <ParallaxLayout name={data.page.name}>
      <SEO title={data.page.name} />
      <ContainerDimensions>
        {({ height, width }) => {
          const elementStyle = {
            width: width + 80,
            height: height + 80 * 0.666,
          };
          return (
            <ParallaxContainer height={height} width={width}>
              {data.page.layers.map(({ image, depth }) => (
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
