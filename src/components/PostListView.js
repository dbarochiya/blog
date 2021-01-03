import { Link } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import Pills from './Pills';
import './PostListView.css'

const PostListView = ({ id, title, subtitle, tags, cover, fields }) => (
    <Link className='post-container' key={id} to={fields.slug}>
    {!!cover ? (
      <div className='image-container'> 
        <Img sizes={cover.childImageSharp.sizes}/>
      </div>
    ) : null}
    <div className='text-container'>
      <div className='text-title'>{title}</div>
      <div className='text-subtitle'>{subtitle}</div>
      <Pills items={tags}></Pills>
    </div>
  </Link>
);

export default PostListView