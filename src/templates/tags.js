import React from "react"
import { Layout } from '../components/Layout';
import { TagList } from "../components/TagList";
import  PostListView from '../components/PostListView';

// Components
import { Link, graphql } from "gatsby"
import Dump from "../components/Dump";

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMdx
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Layout>
      
      <h1>{tagHeader}</h1>
      <Link to="/">All tags</Link>    
      {data.allMdx.edges.map((n) => ( 
        <PostListView 
          id={n.node.id} 
          title={n.node.frontmatter.title} 
          subtitle={n.node.frontmatter.subtitle} 
          cover = {n.node.frontmatter.cover}
          tags={n.node.frontmatter.tags} 
          fields={n.node.fields}/> 
        )
      )}  
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMdx(filter: { 
      frontmatter: { 
        tags: { in: [$tag]  }
        published: { eq: true } 
      }  
    }) {
      totalCount
      edges {
        node {
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
    }
  }
`