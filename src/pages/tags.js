import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"

const TagsPage = ({
  data: {
    allMdx: { group },
  },
}) => (
  <div>
    <div>
      <h1>Tags</h1>
      <ul>
        {group.map(tag => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${(tag.fieldValue).toLowerCase()}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
)

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    allMdx(
      filter: { 
        frontmatter: { 
          published: { eq: true } 
        }  
      }
      limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`