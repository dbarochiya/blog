import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Header from "../components/header"
import Section from '../components/section'
import Pills from '../components/pills'
import Sidebar from '../components/sidebar'

import { formatPostDate, formatReadingTime } from '../utils/dates'

import './blog-listing.css'

const BlogIndexPage = ({ data: { allMdx } }) => (
  <Layout>
    <SEO />
    <Header/>
    <Sidebar/>
    <Section centered>
    {allMdx.nodes.map(post => (
      <Section key={post.fields.slug} name={post.fields.slug} centered>
        <Link to={post.fields.slug} className="blog-listing">
          <h1>{post.frontmatter.title}</h1>
          <p>
            {formatPostDate(post.frontmatter.date)}
            {` • ${formatReadingTime(post.timeToRead)}`}
          </p>
          <Pills items={post.frontmatter.categories} />
          <p>{post.frontmatter.description}</p>
        </Link>
      </Section>
    ))}
    </Section>
  </Layout>
)

export default BlogIndexPage

export const query = graphql`
  query BlogIndex {
    allMdx(
      filter: { fields: { published: { eq: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        fields {
          slug
        }
        timeToRead
        frontmatter {
          title
          description
          categories
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`
