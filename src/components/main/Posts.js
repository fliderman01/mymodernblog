import React from 'react';
import '../../style.css';
import data from '../../data.json';

export default function App() {
  const blogPosts = data.blogPosts;
  console.log('hi');
  return (
    <div>
      <h1>{title}</h1>
      <h3>Author: {author}</h3>
      <img src={image} alt="post" />
      <p>{body}</p>
    </div>
  );
}
