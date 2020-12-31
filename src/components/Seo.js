import React from "react"
import SEO from 'react-seo-component';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

const Seo = (props) => {
  const metadata = useSiteMetadata();
  return (
    <SEO
      title={ props.title || metadata.title}
      titleTemplate = { props.description || metadata.description || `blog`}
      description = { props.description || metadata.description || `blog`}
      image={ props.image || `${metadata.siteUrl}/${metadata.image}`}
      pathname={ props.path || `${metadata.siteUrl}`}
      siteLanguage={ metadata.siteLanguage}
      siteLocale={metadata.siteLocale}
      twitterUsername={metadata.social.twitter}
    />
  )  
}

export default Seo;
