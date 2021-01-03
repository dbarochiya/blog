import { graphql, useStaticQuery } from 'gatsby';

export const useSiteMetadata = () => {
  const { site} = useStaticQuery(
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
      }
    `
  );
  return site.siteMetadata
};