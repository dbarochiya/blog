import React from 'react';
import { graphql, Link } from 'gatsby';
import SEO from 'react-seo-component';
import { Layout } from '../components/Layout';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import './about.css'


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
        <div className='about-container'>
            <div className='about'>
                <h1> <Link to="/">«</Link>About me</h1>
                <p> I am a software developer by profession with formal education in computer science (yah there was a time where we had to visit a place to learn something).</p>
                <p> Over the period of time I have developed niche skills of using google and stack-overflow which helped me <s>survive</s> grow. I am also believer of free & open education for everyone and try to do my bits whenever I get time.</p>
            </div>
            <div className='github'>
                <h1>GitHub Stats</h1>
                <div className='github-stats'> 
                    {/* <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=dbarochiya&layout=compact"/> */}
                    <img src="https://github-readme-stats.vercel.app/api?username=dbarochiya&show_icons=true&hide=contribs&count_private=true"/>
                </div>
            </div>
            
        </div>
    </Layout>
  );
};