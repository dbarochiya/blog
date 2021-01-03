import React from 'react';
import { Link } from 'gatsby';
import { Layout } from '../components/Layout';
import Seo from '../components/Seo';
import './about.css'


export default () => {
  return (
    <Layout>
      <Seo title={'about me'} ></Seo>
        <div className='about-container'>
            <div className='about'>
                <h1> <Link to="/">«</Link>About me</h1>
                <p> I am a software developer by profession with formal education in computer science (yah there was a time where we had to visit a place to learn something).</p>
                <p> Over the period of time I have developed niche skills of using google and stack-overflow which helped me <s>survive</s> grow. I am also believer of free & open education for everyone and try to do my bits whenever I get time.</p>
            </div>
            <div className='github'>
                <h1>GitHub Stats</h1>
                <div className='github-stats'> 
                    <img src="https://github-readme-stats.vercel.app/api?username=dbarochiya&show_icons=true&hide=contribs&count_private=true" alt='git-hub stats'/>
                </div>
            </div>
            
        </div>
    </Layout>
  );
};