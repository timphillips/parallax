import "../components/parallaxLayout.css";

import { Link, graphql } from "gatsby";

import Footer from "../components/footer";
import Image from "gatsby-image";
import React from "react";
import SEO from "../components/seo";
import styled from "styled-components";

const Frame = styled.div`
  max-width: 980px;
  margin: 20px auto;
  padding: 40px;
`;

const Title = styled.h1`
  padding-top: 40px;
  font-weight: 700;
  font-size: 90px;
`;

const Subtitle = styled.h2`
  font-weight: normal;
  font-size: 30px;
  padding-bottom: 30px;
`;

const ThumbnailGrid = styled.main`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-bottom: 50px;
`;

const ThumbnailCaption = styled.div`
  font-size: 14px;
  color: white;
`;

const ThumbnailLink = styled(Link)`
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;

const ThumbnailImage = styled(Image)`
  border-radius: 5px;
`;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    thumbnails: allFile(filter: { name: { eq: "thumbnail" } }) {
      edges {
        node {
          id
          name
          relativePath
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    parallax: allParallaxYaml {
      nodes {
        id
        name
        thumbnail
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  const thumbnailImagesByPath = {};
  for (const { node } of data.thumbnails.edges) {
    thumbnailImagesByPath[node.relativePath] = node;
  }

  return (
    <Frame>
      <SEO title="Home" />
      <header>
        <Title>{data.site.siteMetadata.title}</Title>
        <Subtitle>{data.site.siteMetadata.description}</Subtitle>
      </header>
      <ThumbnailGrid>
        {data.parallax.nodes.map(node => (
          <ThumbnailLink key={node.id} to={`/${node.id}`}>
            <ThumbnailImage
              fluid={
                thumbnailImagesByPath[node.thumbnail].childImageSharp.fluid
              }
            ></ThumbnailImage>
            <ThumbnailCaption>{node.name}</ThumbnailCaption>
          </ThumbnailLink>
        ))}
      </ThumbnailGrid>
      <Footer />
    </Frame>
  );
};

export default IndexPage;
