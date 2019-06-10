const mdxFeed = require('gatsby-mdx/feed')

const configuration = {
  // the name of your website
  title: 'Dhruv Barochiya',
  // the description of the website (eg. what shows on Google)
  description: "Dhruv Barochiya's blog",
  // a short bio shown at the bottom of your blog posts
  // It should complete the sentence: Written by Dhruv Barochiya ...
  shortBio: '',
  // a longer bio showing on the landing page of the blog
  bio: `Just another curious random guy who loves building random things for more infromation go https://dbarochiya.github.io/me.`,
  author: 'Dhruv Barochiya',
  githubUrl: 'https://github.com/dbarochiya/blog',
  // replace this by the url where your website will be published
  siteUrl: 'http://dbarochiya.netlify.com',
  social: {
    // leave the social media you do not want to appear as empty strings
    twitter: '@ddbarochiya',
    medium: '@dhruv.barochia34788',
    facebook: 'dhruv.barochia',
    github: 'dbarochiya',
    linkedin: 'dbarochiya',
    instagram: 'ddbarochiya',
  },
}

module.exports = {
  siteMetadata: configuration,
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-mdx',
      options: {
        extensions: ['.md', '.mdx'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 700,
              backgroundColor: 'transparent',
              showCaptions: true,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-embed-video',
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-autolink-headers',
          'gatsby-remark-smartypants',
          {
            resolve: '@weknow/gatsby-remark-twitter',
            options: {
              align: 'center',
            },
          },
          'gatsby-remark-external-links',
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/content`,
      },
    },
    'gatsby-plugin-netlify',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Dhruv Barochiya',
        short_name: 'Dhruv Barochiya',
        start_url: '/',
        background_color: '#001724',
        theme_color: '#001724',
        display: 'standalone',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: mdxFeed,
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-141653885-1",
      },
    },
    'gatsby-plugin-offline'
  ],
}
