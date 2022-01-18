import React from 'react';
import '../../style.css';

export default function App({ post: { title, text, author, image }, index }) {
  return (
    <>
      <h2>{title}</h2>
      <h4>By: {author}</h4>
      <img src={image} alt="post" width="330px" />
      <p>{text}</p>
    </>
  );
}
