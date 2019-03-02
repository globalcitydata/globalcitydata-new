import React from 'react';
import { graphql } from 'gatsby';

// Components
import { withStyles } from '@material-ui/core/styles';
import { Typography, List, ListItem } from '@material-ui/core';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Container from '../components/container';
import withRoot from '../withRoot';
import Markdown from '../components/markdown';
import PageTitle from '../components/pageTitle';

const AttributeTitle = ({ children, classes }) => (
  <Typography variant="h5" className={classes.attributeTitle}>
    {children}
  </Typography>
);

const styles = {
  body: {
    paddingTop: '1rem',
  },
  section: {
    paddingTop: '2rem',
  },
  attributeTitle: {
    paddingBottom: '1rem',
  },
  attributeBody: {
    paddingLeft: '1rem',
  },
};

const KeyHighlights = ({ highlights, classes }) => (
  <div className={classes.section}>
    <AttributeTitle classes={classes}>Key Highlights</AttributeTitle>
    <div className={classes.attributeBody}>
      {highlights.map((h, i) => (
        <List key={i}>
          {h && (
            <Typography variant="body2" gutterBottom>
              {`${i + 1}. ${h}`}
            </Typography>
          )}
        </List>
      ))}
    </div>
  </div>
);

const Authors = ({ authors, classes }) => (
  <div className={classes.section}>
    <AttributeTitle classes={classes}>Authors</AttributeTitle>
    <div>
      {authors.map(({ name, email }) => {
        const item = `${name}: ${email}`;
        return (
          <List key={name}>
            <ListItem>
              <Typography variant="body2">{item}</Typography>
            </ListItem>
          </List>
        );
      })}
    </div>
  </div>
);

const Data = ({ data, classes }) => {
  const attributes = data.contentfulData;
  const {
    title,
    keyHighlight1,
    keyHighlight2,
    keyHighlight3,
    authors,
  } = attributes;
  const { summary } = attributes.summary;
  const { body } = attributes.body;
  const highlights = [keyHighlight1, keyHighlight2, keyHighlight3];
  return (
    <>
      <SEO title={title} />
      <Layout>
        <Container>
          <PageTitle>{title}</PageTitle>
          <Markdown className={classes.body}>{body}</Markdown>
          <KeyHighlights highlights={highlights} classes={classes} />
          <Authors authors={authors} classes={classes} />
        </Container>
      </Layout>
    </>
  );
};

export default withRoot(withStyles(styles)(Data));

export const query = graphql`
  query DataInstanceBySlug($slug: String!) {
    contentfulData(slug: { eq: $slug }) {
      title
      summary {
        summary
      }
      body {
        body
      }
      keyHighlight1
      keyHighlight2
      keyHighlight3
      usesAndVisualizations
      relatedData
      dataType
      spatialScales
      temporalScales
      sectors
      sustainabilityOutcomes
      determinants
      worldRegions
      authors {
        name
        email
      }
    }
  }
`;
