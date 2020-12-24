import { graphql, useStaticQuery } from 'gatsby';

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            description
            title
	          image
	          siteUrl
	          authorName
	          bio
            social {
              twitter
              github
              facebook
              medium
              linkedin
              instagram
            }
          }
        }
        avatar: file(absolutePath: { regex: "/avatar.png/" }) {
          childImageSharp {
            fixed(width: 150, height: 150, quality: 90) {
              base64
              width
              height
              src
              srcSet
            }
          }
        }
      }
    `
  );
  return site.siteMetadata;
};