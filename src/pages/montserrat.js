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
    page: parallaxYaml(id: { eq: "montserrat" }) {
      name
      layers {
        id
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

const MontserratPage = ({ data }) => (
  <ParallaxLayout name={data.page.name} ratio={1.5}>
    <SEO title={data.page.name} />
    <ContainerDimensions>
      {({ height, width }) => {
        const elementStyle = {
          width: width + 80,
          height: height + 80 * 0.666,
        };
        return (
          <ParallaxContainer height={height} width={width}>
            {data.page.layers.map(({ id, image, depth }) => (
              <ParallaxElement key={id} data-depth={depth}>
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

export default MontserratPage;
