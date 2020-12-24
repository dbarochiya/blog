import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import SEO from 'react-seo-component';
import Pills from '../components/Pills';
import { Layout } from '../components/Layout';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import './post.css'

const Post = ({ data, pageContext }) => {
  const {
    image,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername,
    authorName,
  } = useSiteMetadata();
  const { id, frontmatter, body, fields } = data.mdx;
  const { title, subtitle, tags, date, cover } = frontmatter;
  const { previous, next } = pageContext;
  return (
    <Layout>
      <SEO
        title={title}
        description={subtitle}
        image={
          cover === null
            ? `${siteUrl}${image}`
            : `${siteUrl}${cover.publicURL}`
        }
        pathname={`${siteUrl}${fields.slug}`}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
        author={authorName}
        article={true}
        publishedDate={date}
        modifiedDate={new Date(Date.now()).toISOString()}
      />
      
      <div className='blog-container'>
      <article className="container small">
        <header>
          <h1>
            <Link to="/">«</Link> {title}
          </h1>
          <p> {subtitle}</p>
          <Pills items={tags} />
        </header>
        <MDXRenderer>{body}</MDXRenderer>
      </article>
      <ul className='nav-links'>
        <li>
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>
      </div>
    </Layout>
  );
};

export default Post

export const query = graphql`
  query PostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      frontmatter {
        title
        subtitle
        tags
        date(formatString: "YYYY MMMM Do")
        cover {
          publicURL
          childImageSharp {
            sizes(maxWidth: 300, maxHeight: 250,  traceSVG: { color: "#AAAAAA" }) {
              ...GatsbyImageSharpSizes_tracedSVG
            }
          }
        }
      }
      body
      fields {
        slug
      }
    }
  }
`;