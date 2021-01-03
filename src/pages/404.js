import { Link } from 'gatsby';
import React from 'react';
import { Layout } from '../components/Layout';
import Seo from '../components/Seo';

const LostPage = () => {
  
  return (
    <Layout>
      <Seo></Seo>
      <h2>Hm........looks like your lost</h2>
      <Link to="/"> Take me home </Link>
    </Layout>
  );
};

export default LostPage;