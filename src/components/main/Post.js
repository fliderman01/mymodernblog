import React from 'react';
import '../../style.css';
// import Posts from './components/Posts'

export default function App({ post: { title, body, author, image }, index }) {
  return (
    <div>
      <h1>{title}</h1>
      <h3>Author: {author}</h3>
      <img src={image} alt="post" />
      <p>{body}</p>
    </div>
  );
}
