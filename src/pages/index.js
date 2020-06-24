import React from "react"
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './index.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Dhruv Barochiya"/> 
  <div>
  <background>
    <div className="parallax">
      <div id="stars1" />
      <div id="stars2" />
      <div id="stars3" />
    </div>
  </background>
  <div className="wrapper">
    <main className="page-main">
      <div>
        <div className="intro">Hello, I'm Dhruv !</div>
				<div className="tagline">Just another random guy loves to build random stuff</div>
        <div className="information">
          <a className="nav-link" href='/blog'> BLOG </a>
          <a className="nav-link" href='/about'>ABOUT </a>
        </div>
        <div className="icons-social">
          <a className="icon" target="_blank" href="https://github.com/dbarochiya"><FontAwesomeIcon icon={["fab", "github"]}/></a>
          <a className="icon" target="_blank" href="https://twitter.com/ddbarochiya"><FontAwesomeIcon icon={["fab", "twitter"]}/></a>
          <a className="icon" target="_blank" href="https://medium.com/@dhruv.barochia34788"><FontAwesomeIcon icon={["fab", "medium"]}/></a>
          <a className="icon" target="_blank" href="https://www.linkedin.com/in/dbarochiya"><FontAwesomeIcon icon={["fab", "linkedin"]}/></a>
        </div>
      </div>
    </main>
    <footer className="page-footer">
      <div className="message"><strong>PS : </strong>  I will work free for you if you can arrange a date with Emma Watson &amp; a movie night with Robert Downy Jr.
      </div></footer>
  </div>
  </div>
  </Layout>
)
export default IndexPage
