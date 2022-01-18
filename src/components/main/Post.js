import React from 'react';
import '../../style.css';

export default function Post(props, index ) {
  return (
    <>
      <h2 onClick={() => props.openHeader(props.index)}>{props.post.title}</h2>
      {console.log(index, 'fromChild')}
      <h4>By: {props.post.author}</h4>
      <img src={props.post.image} alt="post" width="330px" />
      <p>{props.post.text}</p>
    </>
  );
}
