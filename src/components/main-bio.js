import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import './main-bio.css'

function Bio() {
 
  return (
    <div className="main-bio-container">
      <div className="main-bio">
        <h1 style={{ marginBottom: '0.875rem' }}>Professional Experience</h1>
        <p>Currently, I am working as DevOps engineer at JUNIPER NETWORKS. I am working on some amazing projects related to automation of the processes tied with the build and release side of the world.</p>
        <h1 style={{ marginBottom: '0.875rem' }}>Education</h1>
        <p>I have completed my undergarduation from DAIICT where I got to learn and got good command on fundamentals of computer science, algorithms, IOT & Networking, Graph Theory and Blockchain.</p>
        <h1 style={{ marginBottom: '0.875rem' }}>Hobbies</h1>
        <p>I love exploring greatest discoveries  </p>
      </div>  
    </div>
  )
}

export default Bio
