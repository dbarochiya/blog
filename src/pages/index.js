import { graphql, Link } from 'gatsby';
import React from 'react';
import SEO from 'react-seo-component';
import TagList from '../components/TagList'
import { Layout } from '../components/Layout';
import  PostListView from '../components/PostListView';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import './index.css'


export default ({ data }) => {
  const {
    description,
    title,
    image,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername,
  } = useSiteMetadata();
  return (
    <Layout>
      <SEO
        title={title}
        description={description || `nothin’`}
        image={`${siteUrl}${image}`}
        pathname={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
      />
        <div className='tags-scroller'>
          <TagList items={data.taglist.group}></TagList>
        </div>
        <div className='post-scroller'>
          {data.postlist.nodes.map( (item ) => (
            <PostListView 
            id={item.id} 
            title={item.frontmatter.title} 
            subtitle={item.frontmatter.subtitle} 
            cover = {item.frontmatter.cover}
            tags={item.frontmatter.tags} 
            fields={item.fields}/>
            )
            )}
        </div>
    </Layout>
  );
};

export const query1 = graphql`
  query SITE_INDEX_QUERY {
    postlist : allMdx(
      limit: 100
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        frontmatter {
          title
          subtitle
          tags
          date(formatString: "YYYY MMMM Do")
          cover {
            publicURL
            childImageSharp {
              sizes(maxWidth: 400, maxHeight: 250,  traceSVG: { color: "#AAAAAA" }) {
                ...GatsbyImageSharpSizes_tracedSVG
              }
            }
          }
        }
        fields {
          slug
        }
      }
    }
    taglist : allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
