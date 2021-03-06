import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

const SEO = ({ description, lang, title }) => (
  <StaticQuery
    query={detailsQuery} // eslint-ignore-line
    render={(data) => {
      const metaDescription = description || data.site.siteMetadata.description;
      return (
        <Helmet
          htmlAttributes={{
            lang,
          }}
          title={title}
          titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          link={[
            // Font Families
            {
              href:
                'https://fonts.googleapis.com/css?family=Lato|Rosario|Roboto:300,400,500',
              rel: 'stylesheet',
            },
            // Materialize Font Icons
            {
              href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
              rel: 'stylesheet',
            },
            // Algolia Search CSS
            {
              href:
                'https://cdn.jsdelivr.net/npm/instantsearch.css@7.0.0/themes/algolia-min.css',
              rel: 'stylesheet',
            },
          ]}
          meta={[
            {
              name: 'description',
              content: metaDescription,
            },
            {
              property: 'og:title',
              content: title,
            },
            {
              property: 'og:description',
              content: metaDescription,
            },
            {
              property: 'og:type',
              content: 'website',
            },
            {
              name: 'twitter:card',
              content: 'summary',
            },
            {
              name: 'twitter:title',
              content: title,
            },
            {
              name: 'twitter:description',
              content: metaDescription,
            },
          ]}
        />
      );
    }}
  />
);

SEO.defaultProps = {
  lang: 'en',
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
