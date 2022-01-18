import React from 'react';
import '../../style.css';

export default function App({
  props,
  post: { title, text, author, image },
  index,
}) {
  return (
    <>
      <h2 onClick={() => openHeader(index)}>{title}</h2>
      <h4>By: {author}</h4>
      <img src={image} alt="post" width="330px" />
      <p>{text}</p>
    </>
  );
}
