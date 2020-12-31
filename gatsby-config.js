const siteMetadata =  {
    title: `Dhruv Barochiya's Blog`,
	description: `I am just a random guy doing random things`, 
	image: `/avatar.jpeg`,
	siteUrl: `https://dbarochiya-blog2.netlify.app`,
	siteLanguage: `en-GB`,
	siteLocale: `en_gb`,
	authorName: `Dhruv Barochiya`,
	bio: `Just another curious random guy who loves building random things`,
	social: {
	  twitter: '@ddbarochiya',
	  medium: '@dhruvbarochiya',
	  facebook: '',
	  github: 'dbarochiya',
	  linkedin: 'dbarochiya',
	  instagram: '',
	},
}

module.exports = {
    siteMetadata: siteMetadata,
    plugins: [
		`gatsby-plugin-styled-components`,
		`gatsby-transformer-sharp`,
		'gatsby-plugin-react-helmet',
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				extensions: [`.mdx`, `.md`],
				gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 590,
						},
					},
				],
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 590,
						},
					},
				],
			},
		},
      	{
			resolve: `gatsby-source-filesystem`,
			options: {
			path: `${__dirname}/content/posts`,
			name: `posts`,
			},
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
			  trackingId: "257417280",
			},
		},
    ],
};