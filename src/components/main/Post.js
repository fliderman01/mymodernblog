import React from 'react';
import '../../style.css';

export default function Post({ post: { title, text, author, image }, index }) {
  return (
    <>
      <h2 onClick={() => props.openHeader(index)}>{title}</h2>
      {console.log(index, 'fromChild')}
      <h4>By: {author}</h4>
      <img src={image} alt="post" width="330px" />
      <p>{text}</p>
    </>
  );
}
