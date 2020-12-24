const siteMetadata =  {
    title: `My Blog from scratch`,
	description: `This is my blog built from scratch`, 
	image: `/static/avatar.png`,
	siteUrl: `https://dhruvbarochiya.com`,
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
    ],
};