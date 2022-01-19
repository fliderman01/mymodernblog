import React from 'react';
import '../../style.css';
import './Post.css';

export default function Post(props) {
  return (
    <>
      <h1 id='h1Head' className="h1Head">
        <a
          className="title"
          href="#start"
          onClick={() => props.openHeader(props.index)}
        >
          {props.post.title}
        </a>
      </h1>
      <h4>By: {props.post.author}</h4>
      <img src={props.post.image} alt="post" width="330px" />
      <p>{props.post.text[0]}</p>
    </>
  );
}
