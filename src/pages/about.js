import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Section from '../components/section'
import SideBar from '../components/sidebar'
import MainBio from '../components/main-bio'
import './about.css'

const AboutPage = () => (
  <Layout>
    <SEO/>
    <Header/>
    <SideBar/>
    <Section centered>
      <MainBio />
    </Section>
  </Layout>
)
export default AboutPage
