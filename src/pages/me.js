import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Redirect } from '@reach/router' 
const MePage = () => (
  <Layout>
    <SEO/>
    <Redirect to='/about' /> 
  </Layout>
)
export default MePage
