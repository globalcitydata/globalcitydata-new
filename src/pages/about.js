import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import withRoot from '../withRoot';
import Markdown from '../components/markdown';
import Container from '../components/container';

const About = ({ data }) => {
  const { body } = data.contentfulOurStoryPage;
  const { html } = body.childMarkdownRemark;
  return (
    <Layout>
      <SEO title="About" description="About page for Global City Data" />
      <Container>
        {/* Display Contentful Our Story markdown body as html */}
        {/* <div dangerouslySetInnerHTML={{ __html: html }} /> */}
        <Markdown>{html}</Markdown>
      </Container>
    </Layout>
  );
};

export default withRoot(About);

export const query = graphql`
  query {
    contentfulOurStoryPage {
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
