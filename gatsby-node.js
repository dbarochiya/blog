const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve('./src/templates/post.js');
  const tagTemplate = path.resolve("src/templates/tags.js")

  return graphql(`
    {
      posts : allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }

      tags : allMdx {
        group(field: frontmatter___tags){
          fieldValue
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    const posts = result.data.posts.nodes;
    // create page for each mdx file
    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1];
      const next = index === 0 ? null : posts[index - 1];
      
      createPage({
        path: post.fields.slug,
        component: blogPostTemplate,
        context: {
          slug: post.fields.slug,
          previous,
          next,
        },
      });
    });

    const tags = result.data.tags.group
    //create pages for each tag
    tags.forEach((tag) => {
      let path = tag.fieldValue.toLowerCase();  
      createPage({
        path: `/tags/${path}/`,
        component : tagTemplate,
        context : {
          tag : tag.fieldValue
        }
      })
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};