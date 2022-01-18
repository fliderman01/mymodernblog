import React from 'react';
import '../../style.css';
import data from '../../data.json';
import Post from './Post'

export default function App() {
  const blogPosts = data.blogPosts;
  console.log('hi');
  return (
    <article>
      {blogPosts.map((post, index) => (
        <Post key={index} index={index} post={post} />
      ))}
    </article>
  );
}
